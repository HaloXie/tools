const readline = require('readline');
const jsf = require('json-schema-faker');
const toJsonSchema = require('to-json-schema');
const convert = require('json-schema-to-openapi-schema');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// JSON Schema 生成配置
const schemaOptions = {
  required: true,
  arrays: {
    mode: 'first',
  },
  objects: {
    additionalProperties: false,
  },
  strings: {
    detectFormat: true,
  },
  postProcessFnc: (type, schema, value) => {
    if (type === 'object') {
      schema.additionalProperties = false;
      if (!schema.required) {
        schema.required = Object.keys(schema.properties || {});
      }
    }
    if (type === 'string') {
      schema.minLength = 1;
      if (value) {
        schema.example = value;
      }
    }
    if (type === 'array') {
      schema.minItems = 0;
      if (value && value.length > 0) {
        schema.example = value;
      }
    }
    return schema;
  },
};

// 预处理 JSON 字符串
function sanitizeJsonString(str) {
  try {
    JSON.parse(str);
    return str;
  } catch {
    str = str.replace(/'/g, '"');
    str = str.replace(/([{,]\s*)([a-zA-Z0-9_$]+)\s*:/g, '$1"$2":');
    str = str.replace(/,(\s*[}\]])/g, '$1');
    return str;
  }
}

// 增强 OpenAPI Schema
function enhanceOpenAPISchema(schema) {
  if (schema.type === 'object' && schema.properties) {
    schema.required = schema.required || Object.keys(schema.properties);
    for (const [key, prop] of Object.entries(schema.properties)) {
      schema.properties[key] = enhanceOpenAPISchema(prop);
    }
  } else if (schema.type === 'array' && schema.items) {
    schema.items = enhanceOpenAPISchema(schema.items);
  }

  // 添加通用字段
  if (schema.type === 'string') {
    schema.minLength = schema.minLength || 1;
  }
  if (schema.type === 'array') {
    schema.minItems = schema.minItems || 0;
  }

  return schema;
}

console.log('请输入 JSON 数据（输入后按回车）：');

rl.on('line', async (input) => {
  try {
    const sanitizedInput = sanitizeJsonString(input);
    const jsonData = JSON.parse(sanitizedInput);

    // 生成 JSON Schema
    const jsonSchema = toJsonSchema(jsonData, schemaOptions);

    // 转换为 OpenAPI Schema 并增强
    const openAPISchema = enhanceOpenAPISchema(await convert(jsonSchema));

    console.log('\n=== JSON Schema ===');
    console.log(JSON.stringify(jsonSchema, null, 2));

    console.log('\n=== OpenAPI Schema ===');
    console.log(JSON.stringify(openAPISchema, null, 2));

    // 生成示例数据
    const example = jsf.generate(jsonSchema);
    console.log('\n=== 示例数据 ===');
    console.log(JSON.stringify(example, null, 2));

    console.log('\n请输入新的 JSON 数据（按 Ctrl+C 退出）：');
  } catch (error) {
    console.error('错误：', error.message);
    console.log('请检查输入格式并重试');
  }
});

rl.on('close', () => {
  console.log('程序已退出');
  process.exit(0);
});

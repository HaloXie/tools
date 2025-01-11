# Code Evaluation and Progressive Optimization Prompt

## Important Note

- All prompts, code examples, and thinking processes should be in English
- Communication with users should be in Chinese
- Keep markdown formatting clean and readable
- Regular review cycles every 3-5 iterations
- Maintain clear transitions between optimization phases

## Iteration Cycles

1. **Review Frequency**

   - Basic improvements: Every 1-2 days
   - Major changes: Every 3-5 days
   - Architecture changes: Every 2 weeks
   - Observability assessment: Weekly
   - API health check: Weekly

2. **Cycle Components**

   ```javascript
   const iterationCycle = {
     planning: {
       review: 'Previous iteration review',
       goals: 'Current iteration goals',
       metrics: 'Success metrics',
       observability: 'Monitoring status',
     },
     execution: {
       tasks: 'Prioritized task list',
       reviews: 'Code review points',
       testing: 'Test coverage goals',
       monitoring: 'Metrics to track',
     },
     evaluation: {
       results: 'Achieved improvements',
       feedback: 'Team feedback',
       nextSteps: 'Next iteration planning',
       metrics: 'Performance metrics',
     },
   };
   ```

3. **Documentation Strategy**

   - Code-level updates: Every PR
   - API documentation: Every feature change
   - Architecture docs: Every major change
   - Team guidelines: Monthly review

4. **Emergency Protocol**

   ```javascript
   const emergencyProcess = {
     assessment: {
       impact: 'Business impact level',
       urgency: 'Response time needed',
       scope: 'Affected components',
     },
     response: {
       immediate: 'Quick fixes',
       shortTerm: 'Temporary solutions',
       longTerm: 'Permanent fixes',
     },
     communication: {
       stakeholders: 'Who to notify',
       updates: 'Update frequency',
       channels: 'Communication methods',
     },
   };
   ```

5. **Team Collaboration**
   ```javascript
   const teamCollaboration = {
     crossTeam: {
       communication: 'Communication channels',
       dependencies: 'Inter-team dependencies',
       schedules: 'Coordination schedules',
     },
     knowledge: {
       sharing: 'Knowledge sharing sessions',
       documentation: 'Shared documentation',
       training: 'Training programs',
     },
     metrics: {
       efficiency: 'Collaboration efficiency',
       blockers: 'Common blockers',
       resolution: 'Resolution time',
     },
   };
   ```

## Initial Assessment Framework

### Step 1: Code Structure Scanning

```javascript
// Example structure to scan
function recommendFastIL(params) {
  // Implementation
}
```

Record the following:

1. Method locations and line numbers
2. Input/output parameters
3. Main logic blocks
4. External dependencies
5. Code history and evolution

   ```javascript
   const codeHistory = {
     changes: 'Recent significant changes',
     patterns: 'Evolution patterns',
     contributors: 'Main contributors',
     painPoints: 'Historical pain points',
   };
   ```

6. Dependency Analysis

```javascript
const dependencyAnalysis = {
  direct: {
    internal: 'Internal module dependencies',
    external: 'External package dependencies',
    services: 'Service dependencies',
  },
  indirect: {
    downstream: 'Downstream impacts',
    upstream: 'Upstream dependencies',
    crossTeam: 'Cross-team dependencies',
  },
  graph: {
    visualization: 'Dependency graph',
    clusters: 'Module clusters',
    critical: 'Critical paths',
  },
};
```

7. Change Analysis
   ```javascript
   const changeAnalysis = {
     frequency: {
       files: 'File change frequency',
       areas: 'Hot spots in codebase',
       patterns: 'Change patterns',
     },
     impact: {
       scope: 'Change impact scope',
       risks: 'Historical risks',
       reviews: 'Review findings',
     },
     trends: {
       complexity: 'Complexity trends',
       coverage: 'Coverage trends',
       quality: 'Quality metrics trends',
     },
   };
   ```

## Technical Debt Management

```javascript
const debtManagement = {
  assessment: {
    code: 'Code quality metrics',
    architecture: 'Architectural fitness',
    testing: 'Test coverage gaps',
    documentation: 'Documentation status',
  },
  prioritization: {
    impact: 'Business impact level',
    effort: 'Required effort',
    risks: 'Associated risks',
    benefits: 'Expected benefits',
  },
  strategy: {
    immediate: 'Critical debt items',
    shortTerm: 'High-impact, low-effort items',
    longTerm: 'Strategic improvements',
    monitoring: 'Debt accumulation tracking',
  },
  metrics: {
    quality: 'Code quality trends',
    velocity: 'Team velocity impact',
    maintenance: 'Maintenance cost',
    satisfaction: 'Developer satisfaction',
  },
};
```

4. **Disaster Recovery**

   ```javascript
   const disasterRecovery = {
     scenarios: {
       dataLoss: 'Data loss recovery',
       serviceDown: 'Service outage recovery',
       security: 'Security breach recovery',
     },
     procedures: {
       immediate: 'Immediate actions',
       communication: 'Communication plan',
       restoration: 'Service restoration',
     },
     prevention: {
       backup: 'Backup strategies',
       redundancy: 'System redundancy',
       testing: 'DR testing schedule',
     },
   };
   ```

5. **Performance Tuning**
   ```javascript
   const performanceTuning = {
     analysis: {
       profiling: 'Code profiling',
       bottlenecks: 'Performance bottlenecks',
       patterns: 'Usage patterns',
     },
     optimization: {
       algorithms: 'Algorithm optimization',
       caching: 'Cache strategies',
       concurrency: 'Concurrency optimization',
     },
     validation: {
       benchmarks: 'Performance benchmarks',
       comparison: 'Before/after comparison',
       monitoring: 'Continuous monitoring',
     },
   };
   ```

## Feedback and Strategy Adjustment

1. **Feedback Collection Points**

   ```javascript
   const feedbackPoints = {
     code: {
       review: 'Code review feedback',
       testing: 'Test results feedback',
       deployment: 'Deployment feedback',
     },
     performance: {
       metrics: 'Performance metrics',
       userFeedback: 'User experience feedback',
       systemHealth: 'System health indicators',
     },
     team: {
       developers: 'Developer experience',
       maintainers: 'Maintenance feedback',
       operators: 'Operations feedback',
     },
   };
   ```

2. **Strategy Adjustment Triggers**

   - Unexpected performance impacts
   - Maintenance difficulties
   - Team feedback patterns
   - Business requirement changes

3. **Adjustment Process**

   ```javascript
   const adjustmentProcess = {
     analysis: {
       impact: 'Analyze impact of current strategy',
       feedback: 'Consolidate all feedback',
       patterns: 'Identify patterns',
     },
     decision: {
       continue: 'Continue current strategy',
       modify: 'Modify specific aspects',
       pivot: 'Change direction completely',
     },
     implementation: {
       immediate: 'Quick adjustments',
       planned: 'Planned changes',
       communication: 'Team communication',
     },
   };
   ```

4. **Documentation Updates**
   - Record adjustment reasons
   - Update strategy documentation
   - Communicate changes to team

## Example Evaluation Process

### First Round - Basic Improvements

````markdown
👏 Let's start with fundamental improvements:

1. Method: validateAndTransformFunctionArg (lines 1-40)
   - Issue: Mixed validation logic and logging
   - Suggestion: Extract pure function
   - Example:
   ```javascript
   // Pure validation
   function validateParams(params, schema) {
     // validation logic
   }
   ```
````

2. Method: buildILValue (lines 200-230)
   - Issue: Mixed URL building and business logic
   - Suggestion: Extract URL builder
   - Example:
   ```javascript
   class UrlBuilder {
     static build(base, params) {
       // URL building logic
     }
   }
   ```

````

### Second Round - Need Context
```markdown
👋 Before proceeding, we need some information:

1. About IL Types
   Q: Plans for supporting types other than 'html'?

2. About Performance
   Q: What's the expected call frequency and response time?

3. About Error Handling
   Q: Specific requirements for GPT call failures?

4. About Monitoring
   Q: What metrics need to be collected?
````

### Third Round - Balanced Implementation

````markdown
Based on collected information:

1. Configuration (Keep it Simple)
   ```javascript
   const ilConfig = {
     html: {
       urlPattern: 'statistic-{name}.html',
     },
   };
   ```
````

2. Error Handling (Targeted)
   ```javascript
   async function handleGPTFailure(error) {
     if (error.type === 'timeout') {
       return this.retryWithBackup();
     }
     return this.fallbackToDefault();
   }
   ```

````

## Key Principles

1. **Progressive Improvement**
   - Start with basic refactoring
   - Collect context before major changes
   - Implement based on actual needs

2. **Test-Driven**
   - Each suggestion includes test examples
   - Verify improvements through tests
   - Ensure maintainability

3. **Positive Feedback**
   - Acknowledge good practices
   - Explain benefits
   - Provide clear next steps

4. **Practicality**
   - Specific to code lines
   - Complete examples
   - Consider real scenarios

## Avoiding Over-Engineering

1. **When to Stop**
   - When current needs are met
   - When benefits don't justify complexity
   - When team capacity is considered

2. **Balance Checklist**
   - Is this solving a real problem?
   - Is the solution proportional?
   - Can the team maintain this?
   - Does it align with business needs?

## Periodic Version Comparison

Every 3 rounds of suggestions or when making significant changes:

1. **Compare with Original Version**
   - Review initial requirements and goals
   - Compare current complexity with original
   - Evaluate if improvements align with original needs
   - Check if we're solving the right problems

2. **Direction Alignment Check**
   ```javascript
   const alignmentCheck = {
     complexity: {
       original: 'Initial complexity level',
       current: 'Current complexity level',
       justified: 'Are increases justified?'
     },
     goals: {
       original: 'Initial improvement goals',
       achieved: 'What we've achieved',
       remaining: 'What's still needed'
     },
     focus: {
       intended: 'What we meant to improve',
       actual: 'What we're actually improving',
       alignment: 'Are they aligned?'
     }
   };
   ```

3. **Course Correction**
   - If deviating from original goals, pause and reassess
   - If complexity increase isn't justified, consider simplification
   - If focus has shifted, realign with core objectives

4. **Questions to Ask**
   - Are we still solving the original problem?
   - Have we introduced complexity without proportional benefit?
   - Are we getting lost in details and missing the bigger picture?
   - Do all stakeholders still understand the codebase?

## Example Test Cases

```javascript
// Test pure functions
describe('ParameterValidator', () => {
  it('validates parameters correctly', () => {
    const params = { value: { type: 'int', value: 42 } };
    const schema = { value: { type: 'int' } };
    const result = validateParams(params, schema);
    expect(result).toEqual({ value: 42 });
  });
});

// Test URL building
describe('UrlBuilder', () => {
  it('builds URL with parameters', () => {
    const base = 'test.html';
    const params = { id: 1 };
    const url = UrlBuilder.build(base, params);
    expect(url).toBe('test.html?id=1');
  });
});
```

## Implementation Guide

1. **Start Small**

   - Begin with pure function extraction
   ```javascript
   // Step 1: Identify pure function candidates
   const pureFunctions = {
     validation: 'Parameter validation logic',
     transformation: 'Data transformation logic',
     calculation: 'Business calculations'
   };

   // Step 2: Extract and test
   function validateParams(params, schema) {
     return /* validation logic */;
   }

   // Step 3: Replace original with pure function
   async function processRequest(params) {
     const validParams = validateParams(params, schema);
     // continue processing
   }
   ```

2. **Phase Transitions**

   ```javascript
   const transitionGuide = {
     preparation: {
       current: 'Document current state',
       goals: 'Define phase goals',
       metrics: 'Establish success metrics'
     },
     execution: {
       steps: 'Break down into small steps',
       validation: 'Validate each step',
       rollback: 'Prepare rollback plans'
     },
     completion: {
       verification: 'Verify all goals met',
       documentation: 'Update documentation',
       communication: 'Inform stakeholders'
     }
   };
   ```

3. **Edge Cases**

   ```javascript
   // Example: Handling edge cases
   class RobustService {
     async process(data) {
       // Handle empty input
       if (!data || Object.keys(data).length === 0) {
         return this.handleEmptyInput();
       }

       // Handle partial data
       if (this.isPartialData(data)) {
         return this.handlePartialData(data);
       }

       // Handle malformed data
       if (!this.isValidFormat(data)) {
         return this.handleMalformedData(data);
       }

       // Normal processing
       return this.processValidData(data);
     }
   }
   ```

4. **Transition Examples**

   ```javascript
   // Example: Gradual service migration
   class ServiceMigration {
     constructor() {
       this.oldService = new OldService();
       this.newService = new NewService();
       this.migrationConfig = {
         percentage: 0,
         startDate: new Date(),
         completionDate: null
       };
     }

     async process(request) {
       if (this.shouldUseNewService(request)) {
         try {
           return await this.newService.process(request);
         } catch (error) {
           // Fallback to old service
           return this.oldService.process(request);
         }
       }
       return this.oldService.process(request);
     }

     shouldUseNewService(request) {
       // Gradual rollout logic
       return Math.random() < this.migrationConfig.percentage;
     }
   }
   ```

## Example Test Cases

```javascript
// Existing test cases...

// Add edge case tests
describe('Edge Cases', () => {
  // Empty input
  it('handles empty input gracefully', async () => {
    const service = new RobustService();
    const result = await service.process({});
    expect(result.status).toBe('empty_input_handled');
  });

  // Partial data
  it('processes partial data correctly', async () => {
    const service = new RobustService();
    const partialData = { id: 1 /* missing other fields */ };
    const result = await service.process(partialData);
    expect(result.status).toBe('partial_data_handled');
  });

  // Malformed data
  it('handles malformed data appropriately', async () => {
    const service = new RobustService();
    const malformedData = { id: 'not_a_number' };
    const result = await service.process(malformedData);
    expect(result.status).toBe('malformed_data_handled');
  });

  // Boundary conditions
  it('handles boundary values correctly', async () => {
    const service = new RobustService();
    const boundaryData = {
      number: Number.MAX_SAFE_INTEGER,
      string: 'a'.repeat(1000),
      array: new Array(1000)
    };
    const result = await service.process(boundaryData);
    expect(result.status).toBe('success');
  });
});

// Add migration tests
describe('Service Migration', () => {
  it('gradually shifts traffic to new service', async () => {
    const migration = new ServiceMigration();
    migration.migrationConfig.percentage = 0.5;

    const results = await Promise.all(
      Array(100).fill().map(() => migration.process({ test: true }))
    );

    const newServiceCalls = results.filter(r => r.source === 'new_service');
    expect(newServiceCalls.length).toBeGreaterThan(30);
    expect(newServiceCalls.length).toBeLessThan(70);
  });

  it('falls back to old service on error', async () => {
    const migration = new ServiceMigration();
    migration.migrationConfig.percentage = 1; // Force new service

    // Simulate new service error
    migration.newService.process = jest.fn().mockRejectedValue(new Error());

    const result = await migration.process({ test: true });
    expect(result.source).toBe('old_service');
  });
});
```

## Special Scenarios

1. **Emergency Fixes**

   - Quick assessment checklist

   ```javascript
   const emergencyChecklist = {
     impact: 'What's the business impact?',
     scope: 'Minimum scope needed for fix?',
     risks: 'Potential side effects?',
     rollback: 'Rollback plan?',
     timing: {
       critical: 'Response within 1 hour',
       high: 'Response within 4 hours',
       medium: 'Response within 24 hours',
       low: 'Response within 72 hours'
     }
   };
   ```

   - Temporary vs permanent solutions
   - Documentation requirements
   - Follow-up improvement plan

2. **Project Scale Considerations**

   ```javascript
   const scaleGuidelines = {
     small: {
       team: '1-3 developers',
       timeline: 'Under 3 months',
       focus: ['Basic structure', 'Essential tests', 'Simple documentation'],
       practices: ['Daily reviews', 'Weekly refactoring'],
     },
     medium: {
       team: '4-10 developers',
       timeline: '3-12 months',
       focus: ['Modular design', 'Comprehensive tests', 'Detailed documentation'],
       practices: ['PR reviews', 'Bi-weekly architecture review'],
     },
     large: {
       team: '10+ developers',
       timeline: 'Over 12 months',
       focus: ['Service architecture', 'Automated testing', 'Living documentation'],
       practices: ['Architecture review board', 'Monthly tech debt review'],
     },
   };
   ```

3. **Technical Debt Management**

   ```javascript
   const debtManagement = {
     assessment: {
       code: 'Code quality metrics',
       architecture: 'Architectural fitness',
       testing: 'Test coverage gaps',
       documentation: 'Documentation status',
     },
     prioritization: {
       impact: 'Business impact level',
       effort: 'Required effort',
       risks: 'Associated risks',
       benefits: 'Expected benefits',
     },
     strategy: {
       immediate: 'Critical debt items',
       shortTerm: 'High-impact, low-effort items',
       longTerm: 'Strategic improvements',
       monitoring: 'Debt accumulation tracking',
     },
     metrics: {
       quality: 'Code quality trends',
       velocity: 'Team velocity impact',
       maintenance: 'Maintenance cost',
       satisfaction: 'Developer satisfaction',
     },
   };
   ```

4. **Disaster Recovery**
    ```javascript
    const disasterRecovery = {
      scenarios: {
        dataLoss: 'Data loss recovery',
        serviceDown: 'Service outage recovery',
        security: 'Security breach recovery'
      },
      procedures: {
        immediate: 'Immediate actions',
        communication: 'Communication plan',
        restoration: 'Service restoration'
      },
      prevention: {
        backup: 'Backup strategies',
        redundancy: 'System redundancy',
        testing: 'DR testing schedule'
      }
    };
    ```

5. **Performance Tuning**
    ```javascript
    const performanceTuning = {
      analysis: {
        profiling: 'Code profiling',
        bottlenecks: 'Performance bottlenecks',
        patterns: 'Usage patterns'
      },
      optimization: {
        algorithms: 'Algorithm optimization',
        caching: 'Cache strategies',
        concurrency: 'Concurrency optimization'
      },
      validation: {
        benchmarks: 'Performance benchmarks',
        comparison: 'Before/after comparison',
        monitoring: 'Continuous monitoring'
      }
    };
    ```

4. **Legacy Code Handling**

   - Assessment strategy

   ```javascript
   const legacyAssessment = {
     dependencies: 'External dependencies?',
     tests: 'Existing test coverage?',
     documentation: 'Available documentation?',
     usage: 'Current usage patterns?',
   };
   ```

   - Gradual improvement approach
   - Risk mitigation
   - Parallel implementation consideration

5. **Team Collaboration**

   - Code review focus points

   ```javascript
   const reviewFocus = {
     readability: 'Is the code self-documenting?',
     testability: 'Are tests comprehensive?',
     maintainability: 'Can others maintain this?',
     knowledge: 'Is knowledge shared?',
   };
   ```

   - Knowledge sharing practices
   - Pair programming suggestions
   - Team capacity considerations

6. **Documentation Updates**

   - Code level documentation

   ```javascript
   // Example JSDoc
   /**
    * @description Validates and transforms function arguments
    * @param {Object} params - Input parameters
    * @returns {Object} Transformed parameters
    * @throws {ValidationError} When validation fails
    */
   ```

   - API documentation
   - Architecture documentation
   - Maintenance guides

7. **Performance Optimization**

   - Assessment Framework

   ```javascript
   const performanceAssessment = {
     metrics: {
       response: 'Response time analysis',
       throughput: 'System throughput',
       resources: 'Resource utilization',
     },
     bottlenecks: {
       cpu: 'CPU-bound operations',
       memory: 'Memory usage patterns',
       io: 'I/O operations',
     },
     optimization: {
       quick: 'Quick wins',
       medium: 'Medium-term improvements',
       long: 'Long-term architectural changes',
     },
   };
   ```

   - Optimization Strategy

   ```javascript
   const optimizationStrategy = {
     immediate: {
       caching: 'Implement caching',
       batching: 'Batch operations',
       indexing: 'Database indexing',
     },
     progressive: {
       async: 'Asynchronous processing',
       queuing: 'Message queues',
       sharding: 'Data sharding',
     },
     monitoring: {
       metrics: 'Performance metrics',
       alerts: 'Alert thresholds',
       dashboards: 'Monitoring dashboards',
     },
   };
   ```

   - Implementation Guide

   ```javascript
   // Example: Implementing caching
   class CachedService {
     constructor(ttl = 3600) {
       this.cache = new Cache(ttl);
     }

     async getData(key) {
       const cached = await this.cache.get(key);
       if (cached) return cached;

       const data = await this.fetchData(key);
       await this.cache.set(key, data);
       return data;
     }
   }
   ```

8. **Branch Scenarios**

   - Assessment Framework

   ```javascript
   const branchScenarios = {
     featureFlags: {
       evaluation: 'Feature flag assessment',
       rollout: 'Gradual rollout strategy',
       cleanup: 'Flag removal plan',
     },
     abTesting: {
       design: 'Test design principles',
       metrics: 'Success metrics',
       analysis: 'Results analysis',
     },
     versioning: {
       compatibility: 'Version compatibility',
       migration: 'Migration strategy',
       support: 'Support timeline',
     },
   };
   ```

   - Implementation Example

   ```javascript
   class FeatureManager {
     async shouldEnableFeature(feature, context) {
       const flag = await this.getFlag(feature);
       return this.evaluate(flag, context);
     }

     async abTest(test, user) {
       const variant = await this.getVariant(test, user);
       await this.trackExposure(test, variant, user);
       return variant;
     }
   }
   ```

9. **Configuration Management**

   - Structure

   ```javascript
   const configurationFramework = {
     environment: {
       dev: 'Development settings',
       staging: 'Staging settings',
       production: 'Production settings',
     },
     features: {
       enabled: 'Enabled features',
       parameters: 'Feature parameters',
       defaults: 'Default values',
     },
     performance: {
       timeouts: 'Operation timeouts',
       retries: 'Retry settings',
       caching: 'Cache parameters',
     },
   };
   ```

   - Implementation Guide

   ```javascript
   class ConfigService {
     constructor(env) {
       this.env = env;
       this.cache = new ConfigCache();
     }

     async getConfig(key) {
       const cached = await this.cache.get(key);
       if (cached) return cached;

       const config = await this.loadConfig(key);
       await this.validateConfig(config);
       await this.cache.set(key, config);

       return config;
     }
   }
   ```

10. **Monitoring and Feedback**

    - Metrics Framework

    ```javascript
    const metricsFramework = {
      performance: {
        latency: 'Response time metrics',
        throughput: 'Request throughput',
        errors: 'Error rates',
      },
      business: {
        usage: 'Feature usage stats',
        conversion: 'Conversion rates',
        satisfaction: 'User satisfaction',
      },
      optimization: {
        before: 'Pre-optimization baseline',
        after: 'Post-optimization metrics',
        impact: 'Business impact',
      },
    };
    ```

    - Feedback Loop

    ```javascript
    class OptimizationMonitor {
      constructor(metrics) {
        this.metrics = metrics;
        this.baseline = null;
      }

      async captureBaseline() {
        this.baseline = await this.metrics.snapshot();
      }

      async evaluateImpact() {
        const current = await this.metrics.snapshot();
        return this.compareWithBaseline(current);
      }

      async adjustStrategy(impact) {
        if (impact.negative) {
          await this.rollback();
        } else if (impact.belowThreshold) {
          await this.enhance();
        }
      }
    }
    ```

## Additional Examples

### Complex Refactoring

```javascript
// Before: Mixed concerns
class UserService {
  async processUser(userId) {
    const user = await this.getUser(userId);
    await this.validateUser(user);
    await this.enrichUserData(user);
    await this.notifyUserUpdate(user);
    return user;
  }
}

// After: Separated concerns with events
class UserProcessor {
  constructor(eventBus) {
    this.eventBus = eventBus;
  }

  async processUser(userId) {
    const user = await this.userRepository.getUser(userId);
    await this.validator.validate(user);

    const enriched = await this.enricher.enrich(user);
    await this.eventBus.emit('user.updated', enriched);

    return enriched;
  }
}
```

### Performance Optimization

```javascript
// Before: Inefficient data loading
async function loadUserData(userIds) {
  const users = [];
  for (const id of userIds) {
    const user = await db.users.findOne(id);
    const profile = await db.profiles.findOne(id);
    users.push({ ...user, ...profile });
  }
  return users;
}

// After: Optimized batch loading
async function loadUserData(userIds) {
  const [users, profiles] = await Promise.all([
    db.users.find({ _id: { $in: userIds } }),
    db.profiles.find({ userId: { $in: userIds } }),
  ]);

  return users.map((user) => ({
    ...user,
    ...profiles.find((p) => p.userId === user._id),
  }));
}
```

### Test Cases

```javascript
describe('Complex Business Logic', () => {
  // Feature flag test
  it('handles feature flags correctly', async () => {
    const manager = new FeatureManager(config);
    const context = { user: mockUser, env: 'production' };

    await manager.setFlag('newFeature', { enabled: true, rollout: 50 });
    const result = await manager.shouldEnableFeature('newFeature', context);

    expect(result).toBeDefined();
    expect(typeof result).toBe('boolean');
  });

  // A/B test
  it('consistently assigns users to test variants', async () => {
    const test = new ABTest('buttonColor');
    const user = { id: 'user123', group: 'beta' };

    const variant1 = await test.getVariant(user);
    const variant2 = await test.getVariant(user);

    expect(variant1).toBe(variant2);
  });

  // Configuration test
  it('loads environment-specific config', async () => {
    const service = new ConfigService('staging');
    const config = await service.getConfig('api');

    expect(config.timeouts).toBeDefined();
    expect(config.retries).toBeGreaterThan(0);
  });
});
```

## Additional Considerations

1. **Security Best Practices**

   ```javascript
   const securityFramework = {
     authentication: {
       methods: ['JWT', 'OAuth', 'Session'],
       validation: 'Token validation',
       refresh: 'Token refresh strategy'
     },
     authorization: {
       roles: 'Role definitions',
       permissions: 'Permission matrix',
       validation: 'Access validation'
     },
     dataProtection: {
       encryption: 'Data encryption',
       masking: 'Data masking',
       sanitization: 'Input sanitization'
     },
     audit: {
       logging: 'Security audit logs',
       monitoring: 'Security monitoring',
       alerts: 'Security alerts'
     }
   };
   ```

   Implementation Example:
   ```javascript
   class SecurityService {
     async validateAccess(user, resource, action) {
       // Validate authentication
       if (!this.isAuthenticated(user)) {
         throw new AuthError('User not authenticated');
       }

       // Check authorization
       if (!await this.hasPermission(user, resource, action)) {
         throw new AuthError('Unauthorized access');
       }

       // Audit logging
       await this.auditLog.record({
         user,
         resource,
         action,
         timestamp: new Date()
       });
     }
   }
   ```

2. **Database Operations**

   ```javascript
   const databasePractices = {
     transactions: {
       acid: 'ACID properties',
       isolation: 'Isolation levels',
       recovery: 'Recovery strategies'
     },
     optimization: {
       indexing: 'Index strategies',
       queries: 'Query optimization',
       caching: 'Cache strategies'
     },
     maintenance: {
       backup: 'Backup procedures',
       migration: 'Schema migration',
       monitoring: 'Performance monitoring'
     }
   };
   ```

   Implementation Example:
   ```javascript
   class DatabaseService {
     async executeTransaction(operations) {
       const session = await this.startTransaction();
       try {
         const results = await Promise.all(
           operations.map(op => this.execute(op, session))
         );
         await session.commit();
         return results;
       } catch (error) {
         await session.rollback();
         throw error;
       }
     }
   }
   ```

3. **Microservices Architecture**

   ```javascript
   const microservicesFramework = {
     design: {
       boundaries: 'Service boundaries',
       communication: 'Inter-service communication',
       discovery: 'Service discovery'
     },
     resilience: {
       circuitBreaker: 'Circuit breaker pattern',
       fallback: 'Fallback strategies',
       retry: 'Retry policies'
     },
     monitoring: {
       health: 'Health checks',
       metrics: 'Service metrics',
       tracing: 'Distributed tracing'
     }
   };
   ```

   Implementation Example:
   ```javascript
   class MicroserviceClient {
     constructor(config) {
       this.circuitBreaker = new CircuitBreaker(config);
       this.discovery = new ServiceDiscovery(config);
     }

     async callService(service, request) {
       const endpoint = await this.discovery.locate(service);
       return this.circuitBreaker.execute(async () => {
         const response = await this.makeRequest(endpoint, request);
         return this.handleResponse(response);
       });
     }
   }
   ```

4. **Internationalization (i18n)**

   ```javascript
   const i18nFramework = {
     translation: {
       loading: 'Translation loading',
       fallback: 'Fallback strategy',
       dynamic: 'Dynamic content'
     },
     localization: {
       numbers: 'Number formatting',
       dates: 'Date formatting',
       currency: 'Currency handling'
     },
     management: {
       keys: 'Translation key management',
       versions: 'Version control',
       updates: 'Update process'
     }
   };
   ```

   Implementation Example:
   ```javascript
   class I18nService {
     constructor(config) {
       this.defaultLocale = config.defaultLocale;
       this.translations = new Map();
     }

     async translate(key, locale, params = {}) {
       const translation = await this.getTranslation(locale, key);
       return this.interpolate(translation, params);
     }

     async formatNumber(number, locale, options = {}) {
       return new Intl.NumberFormat(locale, options).format(number);
     }
   }
   ```

## Observability

```javascript
const observabilityFramework = {
  logging: {
    levels: ['ERROR', 'WARN', 'INFO', 'DEBUG'],
    context: 'Contextual information',
    format: 'Structured logging format',
    correlation: 'Request correlation'
  },
  metrics: {
    business: 'Business metrics',
    technical: 'Technical metrics',
    slos: 'Service level objectives',
    alerts: 'Alert thresholds'
  },
  tracing: {
    distributed: 'Distributed tracing',
    sampling: 'Sampling strategy',
    spans: 'Span management',
    context: 'Context propagation'
  },
  visualization: {
    dashboards: 'Metric dashboards',
    alerts: 'Alert dashboards',
    traces: 'Trace visualization',
    analysis: 'Performance analysis'
  }
};

const businessMetrics = {
  user: {
    engagement: 'User engagement metrics',
    satisfaction: 'User satisfaction scores',
    behavior: 'User behavior patterns'
  },
  business: {
    conversion: 'Conversion metrics',
    retention: 'Retention metrics',
    revenue: 'Revenue impact'
  },
  experience: {
    performance: 'Frontend performance',
    errors: 'User-facing errors',
    feedback: 'User feedback'
  }
};
```

Implementation Example:
```javascript
class ObservabilityService {
  constructor(config) {
    this.logger = new StructuredLogger(config);
    this.metrics = new MetricsCollector(config);
    this.tracer = new DistributedTracer(config);
  }

  async trackOperation(context, operation) {
    const span = this.tracer.startSpan(operation);
    try {
      const result = await operation();
      this.metrics.recordSuccess(operation.name);
      return result;
    } catch (error) {
      this.metrics.recordError(operation.name);
      this.logger.error('Operation failed', {
        operation: operation.name,
        error,
        context
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
```

## API Design Guidelines

```javascript
const apiDesignFramework = {
  principles: {
    restful: 'REST principles',
    consistency: 'API consistency',
    versioning: 'Version strategy',
    documentation: 'API documentation'
  },
  security: {
    authentication: 'Auth methods',
    authorization: 'Access control',
    rateLimit: 'Rate limiting',
    encryption: 'Data encryption'
  },
  responses: {
    status: 'HTTP status codes',
    structure: 'Response structure',
    errors: 'Error handling',
    pagination: 'Pagination strategy'
  },
  evolution: {
    compatibility: 'Backward compatibility',
    deprecation: 'Deprecation process',
    migration: 'Client migration',
    monitoring: 'Usage monitoring'
  }
};
```

Implementation Example:
```javascript
class APIController {
  @ApiOperation({ summary: 'Create resource' })
  @ApiResponse({ status: 201, description: 'Resource created' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 409, description: 'Resource already exists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async createResource(@Body() data: CreateDTO) {
    try {
      const result = await this.service.create(data);
      return {
        status: 'success',
        data: result,
        metadata: {
          timestamp: new Date(),
          version: 'v1'
        }
      };
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new APIError({
          status: 400,
          code: 'INVALID_INPUT',
          message: error.message,
          details: error.details
        });
      }
      if (error instanceof DuplicateError) {
        throw new APIError({
          status: 409,
          code: 'RESOURCE_EXISTS',
          message: 'Resource already exists',
          details: {
            conflictingId: error.conflictingId
          }
        });
      }
      // Log unexpected errors
      this.logger.error('Unexpected error in createResource', {
        error,
        data,
        timestamp: new Date()
      });
      throw new APIError({
        status: 500,
        code: 'INTERNAL_ERROR',
        message: 'An unexpected error occurred'
      });
    }
  }

  @ApiOperation({ summary: 'Batch create resources' })
  @ApiResponse({ status: 207, description: 'Multi-status response' })
  async batchCreate(@Body() items: CreateDTO[]) {
    const results = await Promise.allSettled(
      items.map(item => this.service.create(item))
    );

    return {
      status: 'completed',
      results: results.map((result, index) => ({
        item: index,
        status: result.status,
        data: result.status === 'fulfilled' ? result.value : null,
        error: result.status === 'rejected' ? {
          code: this.getErrorCode(result.reason),
          message: result.reason.message
        } : null
      })),
      metadata: {
        total: items.length,
        successful: results.filter(r => r.status === 'fulfilled').length,
        failed: results.filter(r => r.status === 'rejected').length,
        timestamp: new Date()
      }
    };
  }

  private getErrorCode(error: Error): string {
    const errorMap = {
      ValidationError: 'INVALID_INPUT',
      DuplicateError: 'RESOURCE_EXISTS',
      NotFoundError: 'NOT_FOUND',
      default: 'INTERNAL_ERROR'
    };

    return errorMap[error.constructor.name] || errorMap.default;
  }
}
```

## CI/CD Pipeline

```javascript
const cicdFramework = {
  continuous_integration: {
    build: 'Build process',
    test: 'Test automation',
    lint: 'Code linting',
    security: 'Security scanning'
  },
  continuous_delivery: {
    environments: 'Environment management',
    deployment: 'Deployment strategy',
    rollback: 'Rollback process',
    verification: 'Deployment verification'
  },
  automation: {
    scripts: 'Build scripts',
    config: 'Pipeline configuration',
    notifications: 'Status notifications',
    artifacts: 'Artifact management'
  },
  quality: {
    gates: 'Quality gates',
    metrics: 'Quality metrics',
    coverage: 'Code coverage',
    performance: 'Performance tests'
  }
};
```

Implementation Example:
```javascript
// pipeline.config.js
module.exports = {
  stages: {
    build: {
      steps: [
        'npm install',
        'npm run build',
        'docker build -t app:${VERSION} .'
      ],
      artifacts: ['dist/', 'Dockerfile']
    },
    test: {
      steps: [
        'npm run lint',
        'npm run test:unit',
        'npm run test:integration',
        'npm run security:audit'
      ],
      coverage: {
        threshold: 80,
        report: ['lcov', 'text-summary']
      }
    },
    deploy: {
      environments: {
        staging: {
          url: 'staging.app.com',
          variables: ['STAGING_API_KEY']
        },
        production: {
          url: 'app.com',
          approval: 'manual',
          variables: ['PROD_API_KEY']
        }
      }
    }
  }
};
```

## Code Review Standards

```javascript
const reviewStandards = {
  technical: {
    correctness: 'Functional correctness',
    performance: 'Performance impact',
    security: 'Security implications',
    testing: 'Test coverage'
  },
  maintainability: {
    readability: 'Code readability',
    complexity: 'Code complexity',
    duplication: 'Code duplication',
    documentation: 'Code documentation'
  },
  architecture: {
    patterns: 'Design patterns',
    principles: 'SOLID principles',
    dependencies: 'Dependencies',
    compatibility: 'Compatibility'
  },
  process: {
    scope: 'Change scope',
    impact: 'Change impact',
    risks: 'Potential risks',
    rollback: 'Rollback plan'
  }
};
```

Implementation Example:
```javascript
class CodeReviewChecklist {
  async validateChanges(pr) {
    const results = await Promise.all([
      this.validateTechnical(pr),
      this.validateMaintainability(pr),
      this.validateArchitecture(pr),
      this.validateProcess(pr)
    ]);

    return {
      approved: results.every(r => r.passed),
      feedback: results.flatMap(r => r.comments),
      metrics: {
        coverage: results[0].coverage,
        complexity: results[1].complexity,
        dependencies: results[2].dependencies
      }
    };
  }

  async validateTechnical(pr) {
    return {
      passed: true,
      comments: [],
      coverage: await this.calculateCoverage(pr)
    };
  }
}
```

## Remember

- Keep communication with users in Chinese
- Write code, tests, and technical documentation in English
- Follow progressive optimization
- Avoid over-engineering
- Base decisions on actual needs
- Document decisions and their rationale
- Regularly compare with original version
- Monitor optimization impact
- Adjust strategy based on feedback
- Ensure smooth transitions between phases
- Collect and respond to feedback systematically
- Regular observability assessment
- API health monitoring
- CI/CD pipeline maintenance
- Code review standards enforcement
- Security best practices adherence
```
````

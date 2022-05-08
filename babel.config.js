module.exports = {
  assumptions: {
    setClassMethods: true,
    setSpreadProperties: true,
    setComputedProperties: true,
  },
  presets: [
    '@babel/env',
    '@babel/preset-typescript',
    ['@babel/react', { importSource: '@emotion/react', runtime: 'automatic' }],
  ],
  plugins: [
    '@emotion',
    '@babel/transform-runtime',
    '@babel/syntax-dynamic-import',
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/proposal-private-methods', { loose: true }],
    ['@babel/proposal-private-property-in-object', { loose: true }],
  ],
};

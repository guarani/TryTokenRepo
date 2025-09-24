import StyleDictionary from 'style-dictionary';
import { register } from '@tokens-studio/sd-transforms';

// Register the Tokens Studio transforms
register(StyleDictionary);

export default {
  source: ['tokens-processed.json'],
  preprocessors: [
    {
      name: 'tokens-studio',
      options: {
        resolveReferences: true,
        expandTypography: true,
        expandShadow: true,
        expandComposition: true,
        expandBorder: true,
        resolveMath: true
      }
    }
  ], // This is required for v0.16.0+
  platforms: {
    'ios-swift': {
      transformGroup: 'ios-swift',
      transforms: ['ts/resolveMath'],
      buildPath: 'build/ios/',
      files: [
        {
          destination: 'DesignTokens.swift',
          format: 'ios-swift/class.swift',
          options: {
            className: 'DesignTokens'
          }
        }
      ]
    }
  }
};

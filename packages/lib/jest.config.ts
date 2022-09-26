import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '\\.[jt]s?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
};

export default config;

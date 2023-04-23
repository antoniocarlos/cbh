import { deterministicPartitionKey, hashData } from './dpk';

describe('deterministicPartitionKey', () => {
  test('returns trivial partition key for undefined event', () => {
    expect(deterministicPartitionKey()).toBe('0');
  });

  test('returns partitionKey property if present in the event', () => {
    const event = { partitionKey: 'testKey' };
    expect(deterministicPartitionKey(event)).toBe('testKey');
  });

  test('returns hashed data for event without partitionKey property', () => {
    const event = { data: 'testData' };
    const expectedHash = hashData(JSON.stringify(event));
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });

  test('returns hashed partition key if length exceeds maximum allowed length', () => {
    const longPartitionKey = 'a'.repeat(300);
    const event = { partitionKey: longPartitionKey };
    const expectedHash = hashData(longPartitionKey);
    expect(deterministicPartitionKey(event)).toBe(expectedHash);
  });
});

describe('hashData', () => {
  test('returns correct hash for given data', () => {
    const data = 'testData';
    const expectedHash = 'babb8fb7c9456cbaf49f4a0e383470d180ddf304dbb80d9a4fc5c1fea400ff888547c8418cdbacea4930dbac4c9db552bb743328f08a979f3b2c173b4389a7a7';
    expect(hashData(data)).toBe(expectedHash);
  });
});

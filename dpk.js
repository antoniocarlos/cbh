import crypto from 'crypto';

const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

export const hashData = (data) => {
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

const getPartitionKeyCandidate = (event) => {
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }
  
  if (event.partitionKey) {
    return event.partitionKey;
  }

  return hashData(JSON.stringify(event));
};

const ensureString = (candidate) => {
  return (typeof candidate === 'string') ? candidate : JSON.stringify(candidate);
};

const truncateOrHash = (candidate) => {
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return hashData(candidate);
  }

  return candidate;
};

export const deterministicPartitionKey = (event) => {
  const candidate = getPartitionKeyCandidate(event);
  const stringCandidate = ensureString(candidate);
  const finalCandidate = truncateOrHash(stringCandidate);
  
  return finalCandidate;
};

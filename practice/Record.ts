/**
 * Record make object type
 * Record<T, K>
 *
 * ---
 * Record<string, number>
 * = {[key:string]:number}
 *
 */
type Shape = Record<string, number>;

const square: Shape = {
  s1: 2,
  s2: 4,
  s3: 5,
};

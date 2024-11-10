export default function debounce(callback, delay) {
  let timeout;

  return (...args) => {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  }
}
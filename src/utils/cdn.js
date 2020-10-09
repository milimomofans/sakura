const verson = '1.0.0'
const beseUrl = `https://cdn.jsdelivr.net/gh/milimomofans/cdn@${verson}`

export function CDN(sourcePath) {
    if (sourcePath.startsWith('.')) {
        return `${beseUrl}${sourcePath.substring(1)}`;
      } else if (sourcePath.startsWith('/')) {
        return `${beseUrl}${sourcePath}`;
      } else {
        return `${beseUrl}/${sourcePath}`;
      }
}
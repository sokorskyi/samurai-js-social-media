export const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export function getComponentDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const capitalizeFirstLetter = (string) => /^[A-Z]/.test(string) ? string : `${string[0]}${string.slice(1)}`
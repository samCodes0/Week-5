function isMinnesotaZip(code) {
  if (code >= 55001 && code <= 56763) {
    return true;
  } else {
    return false;
  }
}

console.log(isMinnesotaZip(55403));
console.log(isMinnesotaZip(55001));
console.log(isMinnesotaZip(56763));
console.log(isMinnesotaZip(9999999999));
console.log(isMinnesotaZip(-1));

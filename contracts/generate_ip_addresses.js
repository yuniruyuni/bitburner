// Generate IP Addresses
// ---------------------------------
// Given the following string containing only `digits`,
// return an array with all possible valid IP address combinations
// that can be created from the string:
// 
// 2145136171
// 
// Note that an octet cannot begin with a '0' unless the number itself is exactly '0'.
// For example, '192.168.010.1' is not a valid IP.
// 
// Examples:
// 
// 25525511135 -> ["255.255.11.135", "255.255.111.35"]
// 1938718066 -> ["193.87.180.66"]
export function generate_ip_addresses(digits) {
  function rec(start, lead, parts) {
    if( start === digits.length ) {
      if( lead.length !== 0 ) return [];
      if( parts.length !== 4 ) return [];
      return [parts.join('.')];
    }

    const part = lead + digits.charAt(start);

    if( part[0] === '0' && 1 < part.length ) return [];

    const num = Number.parseInt(part, 10);
    if( 255 < num ) return [];

    return [
      ...rec(start + 1, '', [...parts, part]),
      ...rec(start + 1, part, parts),
    ];
  }

  return rec(0, '', []);
}

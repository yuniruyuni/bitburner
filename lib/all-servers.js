export function allPaths(ns) {
  let targets = new Map([["home", ["home"]]]);
  let found = false;
  // @ignore-infinite
  while( true ) {
    found = false;
    for( const [target, path] of targets.entries() ) {
      for( const current of ns.scan(target) ) {
        if( !targets.has(current) ) {
          found = true;
          targets.set(current, [...path, current])
        }
      }
    }

    if( !found ) return Array.from(targets.values());
  }
}

export function allHostnames(ns) {
  return allPaths(ns).map((p) => p[p.length-1]);
}

/*
 * @param {NS} ns - NS instance for caller script.
 * @return {Server[]} target server list
 */
export function allServers(ns) {
  return allPaths(ns).map(
    (p) => {
      const s = ns.getServer(p[p.length-1]);
      s.path = p;
      return s;
    },
  );
}
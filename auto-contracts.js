import { allServers } from 'lib/all-servers.js';

const CCT = ".cct";

/** @param {NS} ns */
export async function main(ns) {
  const ts = ns.codingcontract.getContractTypes();

  ns.tprint(ts);

  const servers = await allServers(ns);
  for (const server of servers) {
    for (const cct of ns.ls(server.hostname, CCT)) {
      const type = ns.codingcontract.getContractType(cct, server.hostname);
      const answer = solve(ns, type, ns.codingcontract.getData(cct, server.hostname));
      if( answer === undefined ) {
        ns.tprint(`[WARN] Skiped ${type}`);
        continue;
      }
      const res = ns.codingcontract.attempt(answer, cct, server.hostname);
      if (res !== "") {
        ns.tprint(`[INFO] Solved ${type} - ${res}`);
      } else {
        ns.tprint(`[ERROR] Failed to solve ${type} with ${answer}`);
      }
    }
  }
}

import { find_largest_prime_factor } from 'contracts/find_largest_prime_factor.js';
import { subarray_with_maximum_sum } from 'contracts/subarray_with_maximum_sum.js';
import { total_ways_to_sum } from 'contracts/total_ways_to_sum.js';
import { total_ways_to_sum_ii } from 'contracts/total_ways_to_sum_ii.js';
import { spiralize_matrix } from 'contracts/spiralize_matrix.js';
import { array_jumping_game } from 'contracts/array_jumping_game.js';
import { array_jumping_game_ii } from 'contracts/array_jumping_game_ii.js';
import { merge_overlapping_intervals } from 'contracts/merge_overlapping_intervals.js';
import { generate_ip_addresses } from 'contracts/generate_ip_addresses.js';
import { algorithmic_stock_trader_i } from 'contracts/algorithmic_stock_trader_i.js';
import { algorithmic_stock_trader_ii } from 'contracts/algorithmic_stock_trader_ii.js';
import { algorithmic_stock_trader_iii } from 'contracts/algorithmic_stock_trader_iii.js';
import { algorithmic_stock_trader_iv } from 'contracts/algorithmic_stock_trader_iv.js';
import { minimum_path_sum_in_a_triangle } from 'contracts/minimum_path_sum_in_a_triangle.js';
import { unique_paths_in_a_grid_i } from 'contracts/unique_paths_in_a_grid_i.js';
import { unique_paths_in_a_grid_ii } from 'contracts/unique_paths_in_a_grid_ii.js';
import { shortest_path_in_a_grid } from 'contracts/shortest_path_in_a_grid.js';
import { sanitize_parentheses_in_expression } from 'contracts/sanitize_parentheses_in_expression.js';
import { find_all_valid_math_expressions } from 'contracts/find_all_valid_math_expressions.js';
import { hammingcodes_integer_to_encoded_binary } from 'contracts/hammingcodes_integer_to_encoded_binary.js';
import { hammingcodes_encoded_binary_to_integer } from 'contracts/hammingcodes_encoded_binary_to_integer.js';
import { proper_2_coloring_of_a_graph } from 'contracts/proper_2_coloring_of_a_graph.js';
import { compression_i_rle_compression } from 'contracts/compression_i_rle_compression.js';
import { compression_ii_lz_decompression } from 'contracts/compression_ii_lz_decompression.js';
import { compression_iii_lz_compression } from 'contracts/compression_iii_lz_compression.js';
import { encryption_i_caesar_cipher } from 'contracts/encryption_i_caesar_cipher.js';
import { encryption_ii_vigenere_cipher } from 'contracts/encryption_ii_vigenere_cipher.js';

const solvers = {
 "Find Largest Prime Factor": find_largest_prime_factor,
 "Subarray with Maximum Sum": subarray_with_maximum_sum,
 "Total Ways to Sum": total_ways_to_sum,
 "Total Ways to Sum II": total_ways_to_sum_ii,
 "Spiralize Matrix": spiralize_matrix,
 "Array Jumping Game": array_jumping_game,
 "Array Jumping Game II": array_jumping_game_ii,
 "Merge Overlapping Intervals": merge_overlapping_intervals,
 "Generate IP Addresses": generate_ip_addresses,
 "Algorithmic Stock Trader I": algorithmic_stock_trader_i,
 "Algorithmic Stock Trader II": algorithmic_stock_trader_ii,
 "Algorithmic Stock Trader III": algorithmic_stock_trader_iii,
 "Algorithmic Stock Trader IV": algorithmic_stock_trader_iv,
 "Minimum Path Sum in a Triangle": minimum_path_sum_in_a_triangle,
 "Unique Paths in a Grid I": unique_paths_in_a_grid_i,
 "Unique Paths in a Grid II": unique_paths_in_a_grid_ii,
 "Shortest Path in a Grid": shortest_path_in_a_grid,
 "Sanitize Parentheses in Expression": sanitize_parentheses_in_expression,
 "Find All Valid Math Expressions": find_all_valid_math_expressions,
 "HammingCodes: Integer to Encoded Binary": hammingcodes_integer_to_encoded_binary,
 "HammingCodes: Encoded Binary to Integer": hammingcodes_encoded_binary_to_integer,
 "Proper 2-Coloring of a Graph": proper_2_coloring_of_a_graph,
 "Compression I: RLE Compression": compression_i_rle_compression,
 "Compression II: LZ Decompression": compression_ii_lz_decompression,
 // "Compression III: LZ Compression": compression_iii_lz_compression,
 "Encryption I: Caesar Cipher": encryption_i_caesar_cipher,
 "Encryption II: Vigenère Cipher": encryption_ii_vigenere_cipher,
};

function solve(ns, type, args) {
  const solver = solvers[type]
  if( !solver ) return undefined;
  return solver(args);
}
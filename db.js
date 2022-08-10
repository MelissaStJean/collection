import postgres from 'postgres'
const sql = postgres('postgres://username:password@host:port/database', {
  host                 : 'free-tier11.gcp-us-east1.cockroachlabs.cloud',                                   // Postgres ip address[es] or domain name[s]
  port                 : 26257,                                                                            // Postgres server port[s]
  path                 : '',                                                                               // unix socket path (usually '/tmp')
  database             : 'defaultdb?sslmode=verify-full&options=--cluster%3Dsteady-ghost-1645',            // Name of database to connect to
  username             : 'melissa',                                                                        // Username of database user
  password             : 'vzzRCrRXhQAfV6vTv6p8TQ',                                                         // Password of database user
})
export default sql
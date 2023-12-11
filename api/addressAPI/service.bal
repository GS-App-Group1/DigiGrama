import ballerina/http;
import ballerinax/mongodb;

type Address record {|
    string _id;
    int nic?;
    string address;
|};

# Configurations for the MongoDB endpoint
configurable string username = ?;
configurable string password = ?;
configurable string database = ?;
configurable string collection = ?;

# A service representing a network-accessible API
# bound to port `9090`.
service /address on new http:Listener(9090) {
    final mongodb:Client databaseClient;

    public function init() returns error? {
        self.databaseClient = check new ({connection: {url: string `mongodb+srv://${username}:${password}@digigrama.pgauwpq.mongodb.net/`}});
    }

    # A resource for getting the address of a person
    # + return - Address or error
    resource function get .() returns Address[]|error {
        stream<Address, error?>|mongodb:Error AddressStream = check self.databaseClient->find(collection, database);
        return from Address address in check AddressStream
            select address;
    }

    # A resource for getting the address of a person
    # + return - Address or error
    resource function get getAddressByNIC(int nic) returns Address[]|error {
        stream<Address, error?>|mongodb:Error AddressStream = check self.databaseClient->find(collection, database, {nic: nic});
        return from Address address in check AddressStream
            select address;
    }

    resource function get liveness() returns http:Ok {
        return http:OK;
    }

    resource function get readiness() returns http:Ok|error {
        int _ = check self.databaseClient->countDocuments(collection, database);
        return http:OK;
    }
}

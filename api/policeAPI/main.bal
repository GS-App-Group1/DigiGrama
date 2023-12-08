import ballerina/http;
import ballerina/sql;
import ballerinax/mysql;

# Police record type
type PoliceRecord record {
    int nic?;
    string name;
    string address;
    string dob;
};

# Configurations for the database
configurable string host = ?;
configurable string username = ?;
configurable string password = ?;
configurable string databaseName = ?;
configurable int port = ?;

# Service to get police records
service /api/policeCheck on new http:Listener(9090) {
    final mysql:Client dbClient;

    public function init() returns error? {
        self.dbClient = check new (host, username, password, databaseName, port);
    }
    resource function get .() returns PoliceRecord[]|error? {
        stream<PoliceRecord, sql:Error?> policeRecordStream = self.dbClient->query(`SELECT * FROM PoliceRecord`);
        return from PoliceRecord policeRecord in policeRecordStream
            select policeRecord;
    }

    resource function post .(@http:Payload PoliceRecord policeRecord) returns error? {
        _ = check self.dbClient->execute(`INSERT INTO PoliceRecord (nic, name, address, dob) VALUES [${policeRecord.nic}, ${policeRecord.name}, ${policeRecord.address}, ${policeRecord.dob}];`);
    }

    resource function get liveness() returns http:Ok {
        return http:OK;
    }

    resource function get readiness() returns http:Ok|error? {
        int _ = check self.dbClient->queryRow(`SELECT COUNT(*) FROM PoliceRecord;`);
        return http:OK;
    }
}

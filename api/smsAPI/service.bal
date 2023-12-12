
import ballerina/log;
import ballerinax/twilio;
import ballerina/http;

configurable string fromMobile = ?;
configurable string accountSId = ?;
configurable string authToken = ?;


service /sms on new http:Listener(9090) {
    resource function post notify(string toMobile,string message) returns error?{
         //Twilio Client configuration
    twilio:ConnectionConfig twilioConfig = {
        twilioAuth: {
            accountSId: accountSId,
            authToken: authToken
        }
    };

    //Twilio Client
    twilio:Client twilioClient = check new (twilioConfig);

    //Send SMS remote function is called by the twilio client
    twilio:SmsResponse response = check twilioClient->sendSms(fromMobile, toMobile, message);
    log:printInfo("SMS_SID: " + response.sid.toString() + ", Body: " + response.body.toString());
    }
}

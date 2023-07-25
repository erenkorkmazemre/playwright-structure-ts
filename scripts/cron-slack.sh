now=$(date -d '+3 hour' '+%F %T')
echo "Trigger time : $now"

reports=$(grep -hr "reports.cucumber.io" log.txt | grep -v "profile" | grep -Eo 'http[^ \[U>]+'| sed 's/[^a-z0-9\.\/\-\:-]//g')
testLine=$(grep -hr "Tests run" log.txt | grep -v "FAILURE" | grep -v "Time elapsed")

echo "Report => '$reports'"
echo "Total Tests => '$testLine'"
echo "Now => '$now'"
curl -X POST -H 'Content-type: application/json' --data '{"text":"Test Triggered at '"$now"' Report Url is '$reports' "}' {$SLACK_WEBHOOK_URL}
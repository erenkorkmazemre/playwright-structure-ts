now=$(date -d '+3 hour' '+%F %T')
echo "Trigger time : $now"

reportsUrl=$(grep -hr "reports.cucumber.io" log.txt | grep -v "profile" | grep -Eo 'http[^ \[U>]+'| sed 's/[^a-z0-9\.\/\-\:-]//g')
testLine=$(grep -hr "Tests run" log.txt | grep -v "FAILURE" | grep -v "Time elapsed")

echo "Report URL => '$reportsUrl'"
echo "Total Tests => '$testLine'"
echo "Now => '$now'"
curl -X POST -H 'Content-type: application/json' --data '{"text":"Test Triggered at '"$now"' Report Url is '$reportsUrl' "}' 'https://hooks.slack.com/services/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'

-How to extract data from Contact form-

1. Lambda Function, AWS
2. API Gateway has to be pointed at the Lambda Function

-SSL Encryption (https)-
- Go to AWS Certificate Manager
- Confirm that certificate was approved
- Go to AWS Cloudfront
- Go into Distribution, edit general
- Click Custom Certificate
- go to origin tab, edit origin
  - origin Type: Custom Origin (may not need to specify)
  - Origin Protocol Policy: HTTP Only
  - HTTPS Port: 443
  - HTTP Port: 80
  - Origin Response Timeout: 30
  - Origin Keep-alive Timeout: 5

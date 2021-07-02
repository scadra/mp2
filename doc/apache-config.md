# Apache httpd server configuration details

_Configuration for marketplace-front (DEV Stable on port1-dev):_

```
<VirtualHost *:446>
    SSLEngine on
    SSLCertificateFile "/etc/pki/tls/certs/luxhub/luxhub_local.crt"
    SSLCertificateChainFile "/etc/pki/tls/certs/luxhub/luxhub_local_chain.crt"
    SSLCertificateKeyFile "/etc/pki/tls/private/luxhub/luxhub_local.key"
    SSLProtocol -all +TLSv1.2
    SSLCipherSuite EECDH+ECDSA+AESGCM:EECDH+aRSA+AESGCM:EECDH+ECDSA+SHA384:EECDH+ECDSA+SHA256:EECDH+aRSA+SHA384:EECDH+aRSA+SHA256:EECDH+aRSA+RC4:EECDH:EDH+aRSA:HIGH:!RC4:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS

    SSLHonorCipherOrder on
    Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
    Header always append X-Frame-Options SAMEORIGIN
    Header set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains;"
    Header set X-Content-Type-Options nosniff

    CustomLog "logs/marketplace_stable_access_dindix_log" portal
    ErrorLog "logs/marketplace_stable_error_dindix_log"

    DocumentRoot "/opt/axway/apiportal/htdoc_mktp_dindix"
    <Directory "/opt/axway/apiportal/htdoc_mktp_dindix">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
        </Directory>
    RewriteEngine On
</VirtualHost>
<VirtualHost *:447>
    SSLEngine on
    SSLCertificateFile "/etc/pki/tls/certs/luxhub/luxhub_local.crt"
    SSLCertificateChainFile "/etc/pki/tls/certs/luxhub/luxhub_local_chain.crt"
    SSLCertificateKeyFile "/etc/pki/tls/private/luxhub/luxhub_local.key"
    SSLProtocol -all +TLSv1.2
    SSLCipherSuite EECDH+ECDSA+AESGCM:EECDH+aRSA+AESGCM:EECDH+ECDSA+SHA384:EECDH+ECDSA+SHA256:EECDH+aRSA+SHA384:EECDH+aRSA+SHA256:EECDH+aRSA+RC4:EECDH:EDH+aRSA:HIGH:!RC4:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS

    SSLHonorCipherOrder on
    Header edit Set-Cookie ^(.*)$ $1;HttpOnly;Secure
    Header always append X-Frame-Options SAMEORIGIN
    Header set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains;"
    Header set X-Content-Type-Options nosniff

    CustomLog "logs/marketplace_stable_access_stgstx_log" portal
    ErrorLog "logs/marketplace_stable_error_stgstx_log"

    DocumentRoot "/opt/axway/apiportal/htdoc_mktp_stgstx"
    <Directory "/opt/axway/apiportal/htdoc_mktp_stgstx">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
        </Directory>
    RewriteEngine On
</VirtualHost>
```

_Configuration for marketplace-front (DEV Unstable on port2-dev):_



_Useful commands:_

- Get httpd service status:
  `systemctl status httpd24-httpd.service`
- View static files deployed for marketplace-front as apache, for example:
  `sudo -u apache ls -l /opt/axway/apiportal/htdoc_mktp_dindix`
- View service configuration:
  `vi /usr/lib/systemd/system/httpd24-httpd.service`
- View and modify httpd configuration as apg2adm:
  `sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/conf.d/apiportal-ssl.conf`
- Reload configuration as root:
  `sudo -u root systemctl reload httpd24-httpd.service`
- Check general httpd logs:
  `sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/logs/error_log`
- Check errors logs for DIN:
  `sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/logs/marketplace_stable_error_dindix_log`
- Check access logs for DIN:
  `sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/logs/marketplace_stable_access_dindix_log`

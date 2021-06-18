# Marketplace Front

Frontend (static web files) for Marketplace v2.
Built with VueJS, Typescript, Gridsome, Bulma.

> This application requires **marketplace-back** as a runtime backend.

## How to start the application

1. First you need to execute: ``npm install``
2. Then ``npm run develop``
3. Point your browser to `http://localhost:8080`

## Dependencies

### Technologies

- JDK 11
- NodeJS 14+
- npm 6+

### Projects

- VueJS 2.x
- Typescript 4+
- Gridsome 0.7.x
- Bulma 0.9.x via Buefy
(see also [package.json](package.json))

### Runtime

- [marketplace-back](https://gitlab.luxhub.local/dev-luxhub/marketplace-back)

## CI/CD

### Jenkins

| Pipeline | Purpose | State |
| -------- | ------- | ------ |
| [Marketplace-Frontend-Auto](https://jenkins.luxhub.local:8443/view/Agora/job/Marketplace-Frontend-Auto/) | Automatic trigger on each push | (multi-branch) |
| [Marketplace-Frontend-BuildRelease](https://jenkins.luxhub.local:8443/view/Agora/job/Marketplace-Frontend-BuildRelease/) | Build or release in nexus <br> (zip with static web files) | ![](https://jenkins.luxhub.local:8443/buildStatus/icon?job=Marketplace-Frontend-BuildRelease) |
| [Marketplace-Frontend-Deploy](https://jenkins.luxhub.local:8443/view/Agora/job/Marketplace-Frontend-Deploy/) | Deploy webapp | ![](https://jenkins.luxhub.local:8443/buildStatus/icon?job=Marketplace-Frontend-Deploy) |

### Quality

Non-blocking `QA` checks stage are present on [AutoJenkinsfile](AutoJenkinsfile) and [BuildJenkinsfile](AutoJenkinsfile).
In case of failure, the whole build is not set to failed but instead set as `UNSTABLE`.

_Pipelines execute these 3 checks:_
1. `npm audit --audit-level=high`
2. `npm run lint`
3. `npm run test`

- [Sonar report](https://sonar.kube-dev.luxhub.local/dashboard?id=com.luxhub.agora%3Amarketplace-front)

| Indicators | Sizing | Ratings | Issues |
| ---------- | -------| ------- | ------ |
| ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=alert_status) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=coverage) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=sqale_index) | ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=ncloc) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=duplicated_lines_density) | ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=security_rating) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=reliability_rating) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=sqale_rating) | ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=bugs) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=code_smells) <br> ![](https://sonar.kube-dev.luxhub.local/api/project_badges/measure?project=com.luxhub.agora%3Amarketplace-front&metric=vulnerabilities) |

- [Vulnerabilities report on Sonar](https://sonar.kube-dev.luxhub.local/project/extension/dependencycheck/report_page?id=com.luxhub.agora%3Amarketplace-front&qualifier=TRK)

### Deployment

> marketplace-front DIX is currently accessible on https://port-perf.luxhub.local:441/

Static web files are archived into a zip file published on Nexus by [Marketplace-Frontend-Auto](https://jenkins.luxhub.local:8443/view/Agora/job/Marketplace-Frontend-Auto/).
On deployment, they are exploded and stored in a frontend server (not in the cluster) and served by an Apache ``httpd`` properly configured sur such a rich JavaScript application (including deeplink support).

_Useful commands:_

- Get httpd service status:
`systemctl status httpd24-httpd.service`
- View static files deployed for marketplace-front as apache:
`sudo -u apache ls -l /opt/luxhub/htdocs/dix/marketplace-front`
- View service configuration:
`vi /usr/lib/systemd/system/httpd24-httpd.service`
- View and modify httpd configuration as apg2adm:
`sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/conf.d/apiportal-ssl.conf`
- Reload configuration as root:
`sudo -u root systemctl reload httpd24-httpd.service`
- Check general httpd logs:
`sudo -u apg2adm vi /opt/rh/httpd24/root/etc/httpd/logs/error_log`

> Web server `port1-dev.luxhub.local` is accessible through `jump-dev.luxhub.local`

_Configuration for marketplace-front:_
```
<VirtualHost *:441>
    ServerName  port-perf.luxhub.local
    SSLEngine on
    SSLCertificateFile "/etc/pki/tls/certs/luxhub/luxhub_local.crt"
    SSLCertificateChainFile  "/etc/pki/tls/certs/luxhub/luxhub_local_chain.crt"
    SSLCertificateKeyFile "/etc/pki/tls/private/luxhub/luxhub_local.key"
    SSLProtocol -all +TLSv1.2
    Header always append X-Frame-Options SAMEORIGIN
    Header set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubdomains;"
    Header set X-Content-Type-Options nosniff
    CustomLog "logs/marketplace-front_access_dindix_log" marketplace-front
    ErrorLog "logs/marketplace-front_error_dindix_log"
    DocumentRoot "/opt/luxhub/htdocs/dix/marketplace-front"
        <Directory "/opt/luxhub/htdocs/dix/marketplace-front">
                Options Indexes FollowSymLinks
                AllowOverride All
                Require all granted
                RewriteEngine On
                RewriteBase "/"
                RewriteRule ^index\.html$ - [L]
                RewriteCond %{REQUEST_FILENAME} !-f
                RewriteCond %{REQUEST_FILENAME} !-d
                RewriteRule . /index.html [L]
        </Directory>
    RewriteEngine On
    #RewriteRule "^/api/(.*)$" "http://localhost:8090/api/$1" [P]
</VirtualHost>
```
> TODO: Redirect `/api` to backend (commented above)

## Local development

### NodeJS / NPM

Get latest version of npm (not LTS). 
Add the path of npm into your Windows environment variables.

> If you have issues with dependencies, you can delete the folder ``node_modules`` and run again ``npm install``.
> All the command ``npm run xxx`` can be found in the file [package.json](package.json) (scripts section).

### Jenkinsfile

> Those tips are applicable only on IntelliJ IDEA.

This project makes use of several Jenkinsfile that you may want to maintain.
Jenkinsfile (both scripted and declarative) are Groovy DSLs.
To better work in these files with IntelliJ (syntax highlighting and completion) you can do two things:

1. Enable Groovy syntax support

- Go to "File" > "Settings..." and look for "File Types"
- Add the various Jenkinsfile names:
![](doc/Jenkinsfile-association.png)

2. Declare keywords available on our Jenkins pipelines

- Notice the file [doc/jenkinsfile.gdsl](doc/jenkinsfile.gdsl)
- Mark the containing directory as source: "Mark Directory as" > "Sources root"

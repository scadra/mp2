@Library('mpl') _

sbBuildReleasePipeline {
    env.jdkVersion = 'openjdk-11'
    env.branchQueryUrl = 'https://gitlab.luxhub.local/api/v3/projects/213/repository/branches?private_token=aeQxST2Vc7ScCARxYpAf'
    gitlabRepoUrl = 'https://gitlab.luxhub.local/dev-luxhub/agora-front'
    dockerRegistryUrl = 'nexus.luxhub.local:7443'
    sonarProjectKey = 'agora-front'
    sonarHostUrl = 'https://sonar.kube-dev.luxhub.local'
    anchoreSvrUrl = 'https://anchore.kube-dev.luxhub.local/v1'
}

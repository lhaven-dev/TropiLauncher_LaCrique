const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

exports.REMOTE_DISTRO_URL = 'https://files.tropimon.fr/distribution.json'
print(exports.REMOTE_DISTRO_URL)
const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api
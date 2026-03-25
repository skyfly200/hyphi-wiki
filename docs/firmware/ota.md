# OTA Updates

<StatusBadge type="stable" />

WLED supports over-the-air (OTA) firmware updates — no USB cable needed once the device is on your network.

## Via WLED UI

1. **Config → Security & Updates → Manual OTA Update**
2. Download the latest WLED `.bin` from [github.com/Aircoookie/WLED/releases](https://github.com/Aircoookie/WLED/releases)
3. Upload the `.bin` file
4. Device reboots with new firmware

::: warning OTA password
WLED sets an OTA password (default: `wledota`). Change this in **Config → Security & Updates** before connecting to public networks.
:::

## Via WLED App

The WLED mobile app can also push OTA updates:

**Devices → (select device) → … → Update Firmware**

## ArduinoOTA (Development)

During OWLS firmware development, ArduinoOTA allows pushing builds from Arduino IDE over the network:

```cpp
#include <ArduinoOTA.h>

void setup() {
  ArduinoOTA.setHostname("glowflora-home");
  ArduinoOTA.setPassword("your-ota-password");
  ArduinoOTA.begin();
}

void loop() {
  ArduinoOTA.handle();
}
```

In Arduino IDE: **Sketch → Upload → Port → Network Ports → glowflora-home**

## Rollback

WLED uses a two-partition scheme — if a new firmware fails to boot, it automatically rolls back to the previous version. You can also manually trigger rollback via the WLED UI if the device is reachable.

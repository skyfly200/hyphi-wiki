# Wire Formats

<StatusBadge type="stable" />

Detailed encoding specifications for every OWLS characteristic.

## Primitive Types

| Type | Size | Encoding |
|------|------|----------|
| `BLEByte` | 1 byte | Unsigned 8-bit integer |
| `8-byte char` | 8 bytes | UTF-8 ASCII string, right-padded with null bytes |
| `uint32 LE` | 4 bytes | Little-endian unsigned 32-bit integer |
| `int16` | 2 bytes | Signed 16-bit integer |

## Color

```
FF6B35\0\0
^-----^    6 ASCII hex chars (uppercase), RGB
      ^^   2 null padding bytes
```

Always uppercase. The trailing two bytes pad to the 8-byte char format.

## Speed

```
[0x58, 0x02, 0x00, 0x00]  →  600 ms
```

uint32 little-endian, value in **milliseconds** per segment cycle.

## Cycle Time

```
"15\0\0\0\0\0\0"
```

ASCII decimal string representing seconds as an integer. Padded to 8 bytes.

## Threshold

```
"1.5000\0\0"
```

ASCII float string, 4 decimal places, padded to 8 bytes.

## Current Time (0x1805)

10-byte format matching the BLE Current Time Service spec:

| Byte(s) | Field | Notes |
|---------|-------|-------|
| 0–1 | Year | uint16 LE |
| 2 | Month | 1–12 |
| 3 | Day | 1–31 |
| 4 | Hour | 0–23 |
| 5 | Minute | 0–59 |
| 6 | Second | 0–59 |
| 7 | Day of Week | 1=Mon, 7=Sun |
| 8 | Fractions256 | 1/256 second fractions |
| 9 | Adjust Reason | Bitmask per BLE spec |

::: warning Endianness
Only the Year field is multi-byte and uses little-endian encoding. All other fields are single bytes.
:::

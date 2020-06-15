# Kryptowire App Submission Action

This action takes the file path, platform & API key as input and submits the apk file to Kryptowire Portal for analysis

## Inputs

### `pathToFile`

**Required** The path to the artifact apk file.

### `platform`

**Required** The platform (android/ios) of the app.

### `apiKey`

**Required** API key of the user.

## Outputs

### `KryptowireUUID`

UUID of the submitted app for analysis.

## Example usage

steps:

    - uses: actions/checkout@v2

    - uses: actions/download-artifact@v2
        with:
            name: apk
            path: path/to/artifact

    - name: Kryptowire Analysis Submission
        id: appSubmission
        uses: pkumar001/kryptowire-analysis-action@master
        with:
            path-to-file: path/to/artifact/app-prod-debug.apk
            platform: "android"
            apiKey: "************************************"

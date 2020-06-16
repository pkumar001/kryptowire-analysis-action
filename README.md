# Kryptowire App Submission Action

This action takes the file path, platform & API key as input and submits the app file to Kryptowire Portal for analysis

## Inputs

### `pathToFile`

**Required** The path to the artifact apk file.

### `platform`

**Required** The platform (android/ios) of the app.

### `apiKey`

**Required** API key of the user.
**Default** \${{ secrets.KRYPTOWIRE_API_KEY }}

## Outputs

### `KryptowireUUID`

UUID of the submitted app for analysis.

## Example usage

steps:

    - uses: actions/download-artifact@v2
        with:
            name: app
            path: path/to/artifact

    - name: Kryptowire Analysis Submission
        id: appSubmission
        uses: pkumar001/kryptowire-analysis-action@master
        with:
            path-to-file: path/to/artifact/app-prod-debug.apk
            platform: "android"
            apiKey: ${{ secrets.KRYPTOWIRE_API_KEY }}

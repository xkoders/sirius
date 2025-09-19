# Publishing Guide

This guide explains how to publish the Sirius UI packages to npm.

## Package Structure

The monorepo is now structured with scoped packages:

- `@adersolutions/sirius-react` - React components library
- `@adersolutions/sirius-vue` - Vue components library

## Prerequisites

1. **npm Account**: Ensure you have an npm account and are logged in
2. **Organization Access**: Make sure you have publish permissions for the `@adersolutions` organization
3. **Authentication**: Login to npm using `npm login`

```bash
npm login
```

## Publishing Steps

### 1. Build All Packages

Before publishing, ensure all packages are built:

```bash
# Build all packages
pnpm build:all

# Or build individually
pnpm build:react
pnpm build:vue
```

### 2. Version Management

Update version numbers before publishing. You can do this manually in each `package.json` or use npm version:

```bash
# Update React package version
cd packages/react
npm version patch  # or minor, major
cd ../..

# Update Vue package version
cd packages/vue
npm version patch  # or minor, major
cd ../..
```

### 3. Publishing

#### Option A: Publish All Packages
```bash
# Publish both React and Vue packages
pnpm publish:all
```

#### Option B: Publish Individual Packages
```bash
# Publish React package only
pnpm publish:react

# Publish Vue package only
pnpm publish:vue
```

#### Option C: Manual Publishing
```bash
# Navigate to package directory and publish
cd packages/react
npm publish --access public

cd ../vue
npm publish --access public
```

## Package Access

Both packages are configured for public access. The `--access public` flag ensures the packages are published as public packages under the `@adersolutions` scope.

## Verification

After publishing, verify the packages are available:

```bash
# Check if packages are published
npm view @adersolutions/sirius-react
npm view @adersolutions/sirius-vue
```

## Installation Commands for Users

Users can now install the packages using:

```bash
# React
npm install @adersolutions/sirius-react
pnpm add @adersolutions/sirius-react
yarn add @adersolutions/sirius-react

# Vue
npm install @adersolutions/sirius-vue
pnpm add @adersolutions/sirius-vue
yarn add @adersolutions/sirius-vue
```

## Important Notes

1. **Version Synchronization**: Consider keeping both packages at the same version number for consistency
2. **Changelog**: Update CHANGELOG.md files when publishing new versions
3. **Git Tags**: Consider creating git tags for releases
4. **Testing**: Always test packages locally before publishing

## Troubleshooting

### Authentication Issues
```bash
# Check current user
npm whoami

# Re-authenticate if needed
npm logout
npm login
```

### Permission Issues
- Ensure you have publish permissions for the `@adersolutions` organization
- Contact the organization admin if you don't have permissions

### Version Conflicts
- If a version already exists, increment the version number
- Use `npm view @adersolutions/sirius-react` to check existing versions

## Automated Publishing (Optional)

Consider setting up automated publishing using GitHub Actions or similar CI/CD tools for future releases.

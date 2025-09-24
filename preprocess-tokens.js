import { readFile, writeFile } from 'fs/promises';

/**
 * Preprocesses tokens.json by extracting the 'core' token set and flattening it
 * This removes the need for cross-set references
 */
async function preprocessTokens() {
  try {
    // Read the original tokens file
    const tokensContent = await readFile('tokens.json', 'utf-8');
    const tokens = JSON.parse(tokensContent);
    
    // Extract just the core tokens and flatten the structure
    const coreTokens = tokens.core || {};
    
    // Write the flattened core tokens
    await writeFile('tokens-processed.json', JSON.stringify(coreTokens, null, 2));
    
    console.log('✅ Tokens preprocessed successfully!');
    console.log('📄 Extracted core token set to: tokens-processed.json');
    
  } catch (error) {
    console.error('❌ Error preprocessing tokens:', error);
    process.exit(1);
  }
}

preprocessTokens();

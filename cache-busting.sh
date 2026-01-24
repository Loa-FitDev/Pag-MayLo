#!/bin/bash

# Script de cache-busting para deployment
# Uso: ./cache-busting.sh

VERSION=$(date +%Y%m%d%H%M)

echo "🚀 Aplicando cache-busting con versión: $VERSION"

# Actualizar CSS en index.html
if [[ -f "index.html" ]]; then
    sed -i "s/assets\/css\/styles\.css?v=[0-9]*/assets\/css\/styles.css?v=$VERSION/g" index.html
    echo "✅ CSS actualizado"
fi

# Actualizar JS en index.html
if [[ -f "index.html" ]]; then
    sed -i "s/assets\/js\/theme\.js?v=[0-9]*/assets\/js\/theme.js?v=$VERSION/g" index.html
    echo "✅ JS actualizado"
fi

# Actualizar favicon en index.html
if [[ -f "index.html" ]]; then
    sed -i "s/assets\/img\/MyL\.png?v=[0-9]*/assets\/img\/MyL.png?v=$VERSION/g" index.html
    echo "✅ Favicon actualizado"
fi

# Actualizar proyecto salon-belleza
if [[ -f "proyect/salon-belleza/index.html" ]]; then
    sed -i "s/\.\.\/assets\/css\/styles\.css/\.\.\/assets\/css\/styles.css?v=$VERSION/g" proyect/salon-belleza/index.html
    sed -i "s/\.\.\/assets\/js\/main\.js/\.\.\/assets\/js\/main.js?v=$VERSION/g" proyect/salon-belleza/index.html
    echo "✅ Proyecto salon-belleza actualizado"
fi

echo "🎉 Cache-busting completado! Versión: $VERSION"
echo "📝 Ahora podés hacer commit y push con los cambios"
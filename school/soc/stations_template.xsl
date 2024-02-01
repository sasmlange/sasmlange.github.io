<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="style.css" />
            <title>Stations of the Cross</title>
        </head>
        <body>
            <div class="w3-container w3-blue w3-xxxlarge">
                Max's Stations of the Cross
            </div>
            <xsl:for-each select='stations/station'>
                <div class="w3-container">
                    <h2><xsl:value-of select='name'/></h2>
                    
                    <div class="w3-row-padding">
                        <xsl:for-each select='images/image'>
                            <div class="w3-col s6">
                                <img>
                                    <xsl:attribute name="src"><xsl:value-of select='.'/></xsl:attribute>
                                </img>
                            </div>
                        </xsl:for-each>
                    </div>
                    <br />
                    <details class="w3-container">
                        <summary class="w3-large">Prayer</summary>
                        <p class="w3-card w3-container">
                            <xsl:value-of select='prayer'/>
                        </p>
                    </details>
                    <br />
                    <details class="w3-container">
                        <summary class="w3-large">Bible Verse</summary>
                        <p class="w3-card w3-container">
                            <xsl:value-of select='verse'/>    
                        </p>
                    </details>
                    <br />
                    <details class="w3-container">
                        <summary class="w3-large">Reflection</summary>
                        <p class="w3-card w3-container">
                            <xsl:value-of select='reflection'/>
                        </p>
                    </details>
                </div>
            </xsl:for-each>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
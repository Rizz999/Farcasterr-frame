const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(\`
    <html>
      <head>
        <meta property="og:title" content="🔥 $1000 ETH Giveaway" />
        <meta property="og:image" content="https://your-vercel-url.vercel.app/og-image.png" />
        <meta name="fc:frame" content="true" />
        <meta name="fc:frame:button:1" content="Saya Ikut Giveaway" />
        <meta name="fc:frame:post_url" content="https://your-vercel-url.vercel.app/join" />
      </head>
      <body>
        <h1>Giveaway Frame</h1>
      </body>
    </html>
  \`);
});

app.post("/join", express.json(), (req, res) => {
  const fid = req.body?.untrustedData?.fid;
  console.log(\`User dengan fid \${fid} telah join.\`);
  res.send({
    frames: [{ buttons: [{ label: "Berhasil Join 🎉" }] }]
  });
});

app.listen(port, () => {
  console.log(\`App running on port \${port}\`);
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FilmHub</title>
    <style>
        body {
            background-color: #121212;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: #1f1f1f;
        }
        .header h1 {
            margin: 0;
        }
        .header input {
            padding: 10px;
            border-radius: 5px;
            border: none;
        }
        .section {
            padding: 20px;
        }
        .movie {
            margin: 10px 0;
        }
        footer {
            padding: 20px;
            background-color: #1f1f1f;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>FilmHub</h1>
        <input type="text" placeholder="Search...">
    </div>
    <div class="section featured">
        <h2>Supernatural</h2>
        <p>14+ seasons (2005-2020)</p>
        <p>Cast: [Names are blurred]</p>
        <p>Genre: Horror, Action, Sci-fi</p>
    </div>
    <div class="section continue-watching">
        <h2>Continue Watching</h2>
        <div class="movie">
            <p>Fast & Furious (2019) – 136 min</p>
        </div>
        <div class="movie">
            <p>Spiderman no... (2021) – 148 min</p>
        </div>
        <div class="movie">
            <p>Doctor Strange (2016) – 115 min</p>
        </div>
    </div>
    <div class="section comedy">
        <h2>Comedy</h2>
        <div class="movie">
            <p>Spy (2015) – 120 min</p>
        </div>
        <div class="movie">
            <p>Pixels (2015) – 105 min</p>
        </div>
        <div class="movie">
            <p>Central Intelligence (2016)</p>
        </div>
    </div>
    <footer>
        <p>We are always ready to help you.</p>
        <p>Ask a question.</p>
    </footer>
</body>
</html>
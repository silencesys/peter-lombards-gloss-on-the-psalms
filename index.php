<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Peter Lombard - Gloss on the Psalms</title>
    <link rel="stylesheet" href="/public/app.css">
</head>

<body>
    <div id="app">
        <site-header></site-header>
        <!-- Views -->
        <div class="content-wrapper">
                <site-guide @event-hideoverlay="() => { hideGuideOverlay() }"
                            :visible="guide"
                ></site-guide>
            <transition name="slide-horizontal" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>

    <!-- Scripts -->
    <script src="/public/app.js"></script>
</body>
</html>
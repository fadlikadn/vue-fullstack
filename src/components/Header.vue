<template>
    <header class="row">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarHeader">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/"><a class="nav-link">Home</a></router-link> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/menu"><a class="nav-link">Menu</a></router-link>
                    </li>
                </ul>
            </div>
            
        </nav>
    </header>
</template>

<style>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }
</style>
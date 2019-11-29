<template>
    <header class="row">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarHeader">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/" tag="li"><a class="nav-link">Home</a></router-link> 
                    <router-link to="/menu" tag="li"><a class="nav-link">Menu</a></router-link>
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
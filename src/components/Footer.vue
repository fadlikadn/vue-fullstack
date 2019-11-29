<template>
    <footer class="row">
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFooter" aria-controls="navbarFooter" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarFooter">
                <ul class="navbar-nav mr-auto">
                    <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">Home</a></router-link> 
                    <router-link :to="{ name: 'aboutLink' }" tag="li"><a class="nav-link">About</a></router-link>
                    <router-link :to="{ name: 'adminLink' }" tag="li"><a class="nav-link">Admin</a></router-link>

                </ul>
            </div>
        </nav>
    </footer>
</template>
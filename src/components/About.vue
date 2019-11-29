<template>
    <div>
        <h1>About Us</h1>
        <p>Click on the links below for more info:</p>
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarHeader">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/history" tag="li"><a class="nav-link">Our History</a></router-link> 
                    <router-link to="/contact" tag="li"><a class="nav-link">Contact Us</a></router-link>
                    <router-link to="/ordering-guide" tag="li"><a class="nav-link">Ordering Guide</a></router-link>
                    <router-link to="/delivery" tag="li"><a class="nav-link">Delivery</a></router-link>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
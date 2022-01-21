<template>
    <nav>
        <header class="max-header">
            <div class="logo-container">
                <img src="../assets/svg/pokeball.png" >
            </div>
        </header>
        <section class="ghost" id="about"></section>
    </nav>
</template>

<style>
header {
    position: fixed;
    width: 100%;
    z-index: 1;
    font-size: 1rem;
}
.max-header {
    background-color: #2A2D34;
    height: 5rem;
    text-align: center;
}
.logo-container img{
    padding-top: 1rem;
    width: 3rem;
}
.ghost {
    width: 100%;
    height: 100px;
    background-color: #fcfcfc;
}
</style>
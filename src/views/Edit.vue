<template>
    <section class="wrapper">
        <div class="card">
            <form @submit.prevent="update()">
                <div class="header">
                    <h1 class="title text-bold animate__animated animate__slideInLeft"><router-link :to="{ name: 'review.index'}" style="text-decoration: none; color: #fff;"><span class="fa fa-times-circle animate__animated animate__slideInLeft animate__slow"></span></router-link>Ubah Review</h1>
                    <div class="rating" v-if="review.rating === 5">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars" checked>
                        <label for="rate-5" class="fa fa-star animate__animated animate__slideInRight animate__faster"></label>
                        <input type="radio" name="stars" id="rate-4" value="4" class="stars">
                        <label for="rate-4" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-3" value="3" class="stars">
                        <label for="rate-3" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-2" value="2" class="stars">
                        <label for="rate-2" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-1" value="1" class="stars">
                        <label for="rate-1" class="fa fa-star animate__animated animate__slideInRight"></label> 
                    </div>
                    <div class="rating" v-if="review.rating === 4">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars">
                        <label for="rate-5" class="fa fa-star animate__animated animate__slideInRight animate__faster"></label>
                        <input type="radio" name="stars" id="rate-4" value="4" class="stars" checked>
                        <label for="rate-4" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-3" value="3" class="stars">
                        <label for="rate-3" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-2" value="2" class="stars">
                        <label for="rate-2" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-1" value="1" class="stars">
                        <label for="rate-1" class="fa fa-star animate__animated animate__slideInRight"></label> 
                    </div>
                    <div class="rating" v-if="review.rating === 3">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars">
                        <label for="rate-5" class="fa fa-star animate__animated animate__slideInRight animate__faster"></label>
                        <input type="radio" name="stars" id="rate-4" value="4" class="stars">
                        <label for="rate-4" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-3" value="3" class="stars" checked>
                        <label for="rate-3" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-2" value="2" class="stars">
                        <label for="rate-2" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-1" value="1" class="stars">
                        <label for="rate-1" class="fa fa-star animate__animated animate__slideInRight"></label> 
                    </div>
                    <div class="rating" v-if="review.rating === 2">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars">
                        <label for="rate-5" class="fa fa-star animate__animated animate__slideInRight animate__faster"></label>
                        <input type="radio" name="stars" id="rate-4" value="4" class="stars">
                        <label for="rate-4" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-3" value="3" class="stars">
                        <label for="rate-3" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-2" value="2" class="stars" checked>
                        <label for="rate-2" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-1" value="1" class="stars">
                        <label for="rate-1" class="fa fa-star animate__animated animate__slideInRight"></label> 
                    </div>
                    <div class="rating" v-if="review.rating === 1">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars">
                        <label for="rate-5" class="fa fa-star animate__animated animate__slideInRight animate__faster"></label>
                        <input type="radio" name="stars" id="rate-4" value="4" class="stars">
                        <label for="rate-4" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-3" value="3" class="stars">
                        <label for="rate-3" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-2" value="2" class="stars">
                        <label for="rate-2" class="fa fa-star animate__animated animate__slideInRight animate__fast"></label> 
                        <input type="radio" name="stars" id="rate-1" value="1" class="stars" checked>
                        <label for="rate-1" class="fa fa-star animate__animated animate__slideInRight"></label> 
                    </div>
                </div>
                <div class="content">
                    <div class="input-group animate__animated animate__slideInUp animate__fast">
                        <input type="text" name="name" id="input-text" class="input-text" v-model="review.name">
                        <label for="input-text" class="input-placeholder">Nama lengkap</label>
                    </div>
                    <div class="input-group animate__animated animate__slideInUp animate__faster">
                        <textarea name="review" id="textarea" class="textarea" v-model="review.comment"></textarea>
                        <label for="textarea" class="textarea-placeholder">Tulis ulasan di sini</label>
                    </div>
                    <div class="input-group upload-submit">
                        <label for="file-upload" class="file-upload animate__animated animate__slideInUp animate__fast">
                            <input type="file" id="file-upload" accept="image/png, image/jpeg">
                            <div class="custom-upload"><span class="text-bold">UNGGAH FOTO</span><span class="fa fa-camera"></span></div>
                        </label>
                        <button type="submit" class="btn-submit btn-update animate__animated animate__slideInUp"><span class="text-bold">SIMPAN</span><span class="fa fa-arrow-right"></span></button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
    import { useRouter, useRoute } from 'vue-router'
    import axios from 'axios'

    export default {  
        data() {
            return {
                review: {
                    name: '',
                    date: '',
                    rating: null,
                    comment: '',
                    image: '',
                }
            }
        },
        methods: {
            load() {
                const route = useRoute();
                axios.get(`https://my-json-server.typicode.com/tentpoles/fake-json-server/data/${route.params.id}`)
                .then((res) => {
                    this.review = res.data
                })
                .catch((err) => {
                    console.log(err.response)
                })
            },
            update: function() {
                const currentTime = new Date();
                const thisTime = `${currentTime.getDate()}/${currentTime.getMonth()+1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
                const tmpPath = document.getElementById('file-upload').value
                if(tmpPath !== ''){
                    this.review.image = tmpPath.substring(12);
                }
                this.review.date = thisTime
                let ratingStars
                if (document.getElementById('rate-5').checked) {
                    ratingStars = document.getElementById('rate-5').value;
                }
                else if (document.getElementById('rate-4').checked) {
                    ratingStars = document.getElementById('rate-4').value;
                }
                else if (document.getElementById('rate-3').checked) {
                    ratingStars = document.getElementById('rate-3').value;
                }
                else if (document.getElementById('rate-2').checked) {
                    ratingStars = document.getElementById('rate-2').value;
                }
                else if (document.getElementById('rate-1').checked) {
                    ratingStars = document.getElementById('rate-1').value;
                }
                this.review.rating = parseInt(ratingStars)
                axios.put(`https://my-json-server.typicode.com/tentpoles/fake-json-server/data/${this.review.id}`, this.review)
                .then(() => {
                    alert('Data berhasil diubah!')
                })
                .catch((err) => {
                    console.log(err.response)
                });
            }
        },
        mounted() {
            this.load()
        }
    }
</script>

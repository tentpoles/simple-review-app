<template>
    <section class="wrapper">
        <div class="card">
            <form @submit.prevent="store()">
                <div class="header">
                    <h1 class="title text-bold animate__animated animate__slideInLeft">Review</h1>
                    <div class="rating">
                        <input type="radio" name="stars" id="rate-5" value="5" class="stars" required>
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
                </div>
                <div class="content">
                    <div class="input-group animate__animated animate__slideInRight animate__fast">
                        <input type="text" name="name" id="input-text" class="input-text" v-model="form_review.name" required>
                        <label for="input-text" class="input-placeholder">Nama lengkap</label>
                    </div>
                    <div class="input-group animate__animated animate__slideInRight">
                        <textarea name="review" id="textarea" class="textarea" v-model="form_review.comment" required></textarea>
                        <label for="textarea" class="textarea-placeholder">Tulis ulasan di sini</label>
                    </div>
                    <div class="input-group upload-submit">
                        <label for="file-upload" class="file-upload animate__animated animate__slideInLeft">
                            <input type="file" id="file-upload" accept="image/png, image/jpeg">
                            <div class="custom-upload"><span class="text-bold">UNGGAH FOTO</span><span class="fa fa-camera"></span></div>
                        </label>
                        <button type="submit" class="btn-submit btn-store animate__animated animate__slideInRight"><span class="text-bold">KIRIM</span><span class="fa fa-arrow-right"></span></button>
                    </div>
                </div>
            </form>
            <div class="line-break"></div>
            <div class="other-review animate__animated animate__slideInUp" v-for="review in reviews" :key="review.id">
                <div class="profile-picture">
                    <img src="https://i.stack.imgur.com/34AD2.jpg" alt="profile-picture">
                </div>
                <div class="review-detail">
                    <div class="review-name">
                        <h2 class="full-name text-bold">{{ review.name }}</h2>
                        <details class="action">
                            <summary class="action-list-open">
                                <span class="fa fa-ellipsis-h"></span>
                            </summary>
                            <div class="action-list">
                                <router-link :to="{ name: 'review.edit', params:{id: review.id}}" style="text-decoration: none; color: #fff;"><span class="action-list-item">Ubah</span></router-link>
                                <span class="action-list-item" @click.prevent="destroy(review.id)">Hapus</span>
                            </div>
                        </details>
                    </div>
                    <p class="review-date">{{ review.date }}</p>
                    <div class="review-rating">
                        <span v-for="(star, index) in 5" :key="index" class="fa fa-star" :class="index < review.rating ? 'yellow-star': 'white-star'"></span>
                    </div>
                    <p class="review-comment">{{ review.comment }}</p>
                    <div class="review-image">
                        <div class="img-wrapper" :class="review.image === 'none' ? 'no-image': 'display-image'">
                            <img v-bind:src="review.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                reviews: [],
                form_review: {
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
                axios.get('https://my-json-server.typicode.com/tentpoles/fake-json-server/data')
                .then((res) => {
                    this.reviews = res.data
                })
                .catch((err) => {
                    console.log(err.response)
                })
            },
            store: function(event) {
                const currentTime = new Date();
                const thisTime = `${currentTime.getDate()}/${currentTime.getMonth()+1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
                const tmpPath = document.getElementById('file-upload').value
                tmpPath !== '' ? this.form_review.image = tmpPath.substring(12) : this.form_review.image = 'none'
                this.form_review.date = thisTime
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
                this.form_review.rating = parseInt(ratingStars)
                axios.post('https://my-json-server.typicode.com/tentpoles/fake-json-server/data', this.form_review)
                .then((res) => {
                    this.load()
                    alert('Data berhasil ditambah!')
                    this.form_review.name = this.form_review.comment = "";
                    event.target.reset();
                })
                .catch((err) => {
                    console.log(err.response)
                })
            },
            destroy: function(id) {
                if(confirm('Apakah Anda yakin akan menghapus data ini?')){
                    axios.delete(`https://my-json-server.typicode.com/tentpoles/fake-json-server/data/${id}`)
                    .then(() => {
                        this.load()
                        alert('Data berhasil dihapus!')
                    })
                    .catch((err) => {
                        console.log(err.response)
                    });
                }
            }
        },
        mounted() {
            this.load()
        }
    }
</script>

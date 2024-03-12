<template>
  <div class="carousel">
    <div class="image-container" :style="{ transform: 'translateX(' + translateValue + ')' }">
      <div class="image-row" v-for="(row, rowIndex) in imageRows" :key="rowIndex">
        <div class="image-item" v-for="(image, colIndex) in row" :key="colIndex">
          <img :src="image" :alt="'Image ' + (rowIndex * 3 + colIndex + 1)" :style="{ width: colIndex === currentIndex ? '120%' : '100%' }">
        </div>
      </div>
    </div>

    <div class="carousel-btn prev-btn" @click="prevImage">❮</div>
    <div class="carousel-btn next-btn" @click="nextImage">❯</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      imageindex:0,
      
      images:[
        "/images/Rectangle1.png",
        "/images/Rectangle2.png",
        "/images/Rectangle3.png",
        "/images/Rectangle1.png",
        "/images/Rectangle2.png",




      ]
    };
  },
  computed: {
    translateValue() {
      return -this.currentIndex * 500 + "px"; 
    },
    imageRows() {
      const rows = [];
      const totalImages = this.images.length;

      for (let i = 0; i < totalImages; i += 3) {
        rows.push(this.images.slice(i, i + 3));
      }

      return rows;
    },
  },
  methods: {
    nextImage() {
      const totalRows = this.imageRows.length;
      this.currentIndex = (this.currentIndex + 1) % (totalRows + 1); 
      this.imageindex  ++
      console.log(this.currentIndex);
    },
    prevImage() {
      console.log('abcdcd');
      const totalRows = this.imageRows.length;
      this.currentIndex = (this.currentIndex - 1 + totalRows) % (totalRows + 1); 
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100%; /* Adjust the width based on the number of images and their width */
  overflow: hidden;
  position: relative;
}

.image-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.image-row {
  flex: 0 0 100%;
  display: flex;
}

.image-item {
  flex: 0 0 33.3333%;
  
  box-sizing: border-box;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: #333;
  color: #fff;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}
</style>

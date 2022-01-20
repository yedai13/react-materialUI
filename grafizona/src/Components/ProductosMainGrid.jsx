import { Grid } from "@material-ui/core";
import React from "react";
import ItemProductoMainGrid from "./ItemProdutoMainGrid";
import skirt from "../img/skirt.jpg";
import manga from "../img/manga.jpg";
import sweatshirt from "../img/sweatshirt.png";
import remera from "../img/remera.jpg";
import stickers from "../img/stickers.jpg";
import accesorios from "../img/accesorios.jpg";
const ProductosMainGrid = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="center"
        lg={4}
        md={6}
        sm={12}
        xs={12}
      >
        <ItemProductoMainGrid
          title="REMERAS"
          description="Anime Vaporwave Japonese Art"
          image={remera}
        />
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        lg={4}
        md={6}
        sm={12}
        xs={12}
      >
        <ItemProductoMainGrid
          title="STICKERS!"
          description="Completa tu compra con los diseños mas originales"
          image={stickers}
        />
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        lg={4}
        md={6}
        sm={12}
        xs={12}
      >
        <ItemProductoMainGrid
          title="ACCESORIOS"
          description="Chokers Medias Largas estilo Alternativo"
          image={accesorios}
        />
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        lg={4}
        md={6}
        sm={12}
        xs={12}
      >
        <ItemProductoMainGrid
          title="MANGA"
          description="Manga y Comics"
          image={manga}
        />
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        lg={4}
        md={6}
        sm={12}
        xs={12}
      >
        <ItemProductoMainGrid
          title="SKIRTS"
          description="Polleras Tableadas Estilo Japones"
          image={skirt}
        />
      </Grid>

      <Grid item container justify="center" lg={4} md={6} sm={12} xs={12}>
        <ItemProductoMainGrid
          title="SWEATSHIRTS"
          description="Buzos Cuello Redondo"
          image={sweatshirt}
        />
      </Grid>
    </Grid>
  );
};

export default ProductosMainGrid;

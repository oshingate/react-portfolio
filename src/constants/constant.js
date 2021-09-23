const data = {
  educationData: [
    {
      title: 'AltCampus, Dharamashala',
      desc: 'Bootcamp (MERN Stack)',
      date: 'Feb 2021 - Aug 2021',
    },
    {
      title: 'Sinhgad Institute Of Technology, Lonavala',
      desc: 'B.E. (Computer Science)',
      date: 'Jun 2014 - May 2019',
    },
    {
      title: ' A. D. Joshi Jr. college, Solapur',
      desc: '12th (HSC)',
      date: 'Jun 2013 - May 2014',
    },
  ],
  certifiacates: [
    {
      link: 'https://cutshort.io/certificate/55947',
      title: 'CutShort Certified Javascript - Advanced',
      by: 'CutShort',
      credentialId: '55947',
      expiary: 'Sept 2021 - Sept 2022',
    },
    {
      link: 'https://freecodecamp.org/certification/fcc1ab6ffa3-0779-46e3-834f-aa48f358e083/javascript-algorithms-and-data-structures',
      title: 'JavaScript Algorithms and Data Structures',
      by: 'freeCodeCamp',
      credentialId: 'fcc1ab6ffa3-0779-46e3-834f-aa48f358e083',
      expiary: 'Aug 2021 - No Exp.',
    },
    {
      link: 'https://www.linkedin.com/company/mindscripts-tech/',
      title: '  Angular 6/7',
      by: 'MindScripts Tech',
      credentialId: 'ANG24AUG2019WD0800-PS-7032',
      expiary: 'Oct 2019 - No Exp.',
    },
    {
      link: 'https://www.linkedin.com/company/mindscripts-tech/',
      title: 'Diploma in Java',
      by: 'MindScripts Tech',
      credentialId: 'DIJ12AUG20190400-PS-3533',
      expiary: 'Oct 2019 - No Exp.',
    },
    {
      link: 'https://www.udemy.com/certificate/UC-b1ac32a4-82f6-45b8-b64c-a9d905e49b82/',
      title: 'HTML 5',
      by: 'Udemy',
      credentialId: 'UC-b1ac32a4-82f6-45b8-b64c-a9d905e49b82',
      expiary: 'Oct 2020 - No Exp.',
    },
    {
      link: 'https://media-exp1.licdn.com/dms/image/C4E22AQE9LuWBKmdLnQ/feedshare-shrink_800/0/1621346780027?e=1634774400&v=beta&t=KNWqqCh-2QuQeqCx5Hyb1Kp1ffAu_w3HmSrKWw5OS9o',
      title: 'Hackathon by GitHub',
      by: 'GitHub',
      credentialId: 'altcampus21547ash',
      expiary: 'Oct 2020 - No Exp.',
    },
  ],
  techStack: [
    {
      basic: [
        {
          name: 'HTML5',
          image:
            'https://d33wubrfki0l68.cloudfront.net/6025574ad65d47490faa40426923ab469fbbf212/8faa4/static/img/html5.webp',
        },
        {
          name: 'CSS',
          image:
            'https://d33wubrfki0l68.cloudfront.net/85d95abba214bcf7e35827a5bc225245ea4fe757/dd7a4/static/img/css3.webp',
        },
        {
          name: 'JavaScript',
          image:
            'https://d33wubrfki0l68.cloudfront.net/48fa03eb2a15ef7fd6d9b3193cab75f0a5d9e633/cd3a1/static/img/javascript.webp',
        },
        {
          name: 'SCSS',
          image:
            'https://d33wubrfki0l68.cloudfront.net/eedee52655bdf4e3721b625af4c1611f948498dd/a6631/static/img/sass.webp',
        },
      ],
      frontEnd: [
        {
          name: 'React',
          image:
            'https://d33wubrfki0l68.cloudfront.net/01c22ebd7a23c0f7a5f8e5c0c8a330f864072dc6/cd5c5/static/img/react.webp',
        },
        {
          name: 'Angular 7',
          image:
            'https://d33wubrfki0l68.cloudfront.net/628cc1166f4fd45cee07bf9df4f32d430106332d/8b834/static/img/angular.webp',
        },
        {
          name: 'BootStrap',
          image:
            'https://d33wubrfki0l68.cloudfront.net/443abfb01885e75e5b107b7bad92fcabc85cbece/e45a2/static/img/bootstrap.webp',
        },
      ],
      backEnd: [
        {
          name: 'NodeJS',
          image:
            'https://d33wubrfki0l68.cloudfront.net/c3544fe6c91781268c0d4bdd0b18f8b03d95d0ee/7bf21/static/img/nodejs.webp',
        },
        {
          name: 'ExpressJS',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OBx4zthO57vyyxQtlTwIBusic1H8zYAbZA&usqp=CAU',
        },
        {
          name: 'MongoDB',
          image:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADzCAMAAAAW57K7AAABR1BMVEX///9BLx+BxWRQlkZSmUlOk0Vbqk5OlEWCyGVSmEhALR5psFd+xGBVnEtkrVRXqEyOcU5ws14+JBuJakQ/KBxRpkh5uGaEzGd7w1tssVo6HxDt6+pAKh1/u2zy7up7uWesmIKRdVN6tV00FADGuKo4Gwl/wGI9IBltmlCRhoGi1I3k8t5ypFVGPyaIwHfc7tXO6MShim/n4tvNyMa7tLFYRTybko7E47iHyGyTzXtYaTlPUy9DNSFgfUKu2Zz2+/RJbTQrAACDdnC7361njElMTCxGVi26qZamkHfAurdMNiupoJ0yEAB3aWO13KWYz4JNfjxabTtlhkdZTTlgT0fDtKRfTkZUXzlwklh5q2ZMcDhTi0RJZDNelUtFTClGWi2Do2uXo3ilpYSIqW6/u6CstpF6b1jHxaqfnX/X1L9SRDKfm4qCYDNznIdcAAARw0lEQVR4nO2d+1saxxrHgWjEFSJZJkqXCVFwjShEZQFRUSpKVC7eirFN0qT12KTntP//z2f2PrO7syx0R7DPfp8+7coudD6873znndkLoVCgQIECBQoUKFCgQIECBQoUKFCgQIECBQpEVaOxsbG5ubm1c3xxeLiu6/DweGcLvbyxsdEYdws9amNr6/hwt1aLxGIpRTFC+muRSG13/QLBTSxXY2PzeH23FtOaO1AxlThSuzzcmrRoNTZ3dmsRJRYeSKxgsVQsUkNQ46ZQ1di82JVRhgchqVKx2vrOuJkaW5c1b+nljSlSuxgfEoKJ/OO42JhitYvNcdBsrNd8h1GViu3uPLZBbO36lmUOQol3+Ih519jxGpqogzwixdYfi2irlhoIsYgUXc1mCzZls6sRZe8gtEci2tyl08gg0Ui2sHZzsHfXKhbrdQ4CwBsCAMBwvVhs7e9dH5wUCqvy8XSsWOSCNU3jkNJv5JCsZgs3CKMO5JZDyHFcGP1DiFOlUnII7HqtkI0s0phSu2y9bsMxODJLdu1gv8jxPLQSuEgB40G9uHdSWHVmisWOGeJsOQQH5Ut2ba/F8WAYFJwqzEGeL+7fyEwOIVpn5t0bTjTZk1ZdZhkFBaeCPCzuOSGl1lnx7MZsMDf7HP+PWXQkDvDF60Jk0QrEqA9tkX0nGinc1b3CeE1FDoDWSZYMUqzGhqcWI2jW9gHwGhmuWPQcRI6vX2eJGKW2WOBsYuGJRtdaw+QZvLsGng9GRGGCKHbJgmfdDM9idp+H3tsXDvM//zpUL+NA/SZiJl2MQaHQwBLghvOcaYpg8d3L90N9AShG+1kDKMVgEDLdILr2djhH48DP7xY+DWuDoGUGiIEjHBrpFt0f8qvmfn73biH+dYgepAIVDCAGCVczcLLh4ZKtjnAQz6x3i9N4rg1PSO34jWPWBtEbfiic4i8I593rePxqyIzj6qtGfHyvEczuszhUumk4Mk/843AuwmEJ53sHMt16tT5EqxDO69c6z7BA4MBION87kNl9CkOkG1dHOCYPAhqGB7bMDuRziWCOPtET7zxceO0NwRP/PAwQVzT+r36PQKYdDNF9OHgj4yhAGs9Qro11IL9LHqy29t59+OsFG0/8yxBA/AkrQ7gw4pOte20NuFtYePPGyjNd9G6PmCFE/J2lGvYWLXgdRbh6YWFhwcYT/+Q9wPCOlcEZU9Pomlc7ACcLOs9rnCd+5TnjuKJZkvo7STXsevHAY2vA3suXC2aAMB7vnoBVCP4atmnXi3ve0p8rFjCe1wTPbMtjF+I4Y87gr2EPb9fg5gcqT9zz3AEzbF8rOHOuvdjy1BTY+gHxYAlH8HgeVnmTZ5cRj7eqn/91zo3H69yBXzMMwVceczj1Vo3C93NKfF4aCUfyePU4VgOqwYMmcx7EARQeMuEsPPEvnrqhOaXzdxHO5Cl4WRlE4Zmbc+f55ClAwBxQfeXZMXm8tAP1njlrwsVHCRDcZ1PwHBs8XsoD+OXFizkt4QwgDGUKyVsP4lpseC6GKnf4K5nHknAmiipPAeKKbHgOh+Hhii+ceKZIeQrQRPCAz89f2BPOxuNlDMJ4fC2wh+LhZ73wTHlZTMAK7LHxwJaM88LqcDaeqU+D1yVZ8QzjB+Djcw2IGFLtPPGvAx2BVf8Zhof/9JwIkMrzxoFnsCOw8mtz/Bm4+sYV5515Zm1A0wMdATLiweqdQVMX+PX5c1vCOfPEB54TgozqHaweHVS/yd3HqQPZeGZnpwYmHNhjXI8OXq4Cs881INLhTJ5ZXVPTgyYf2IIVI57ogCYo3ccpQDLPrEVTgxKO1fzH+/wUfqHy2BX/cUDCmfNTZvPtAWsz8PP8vMmDJZwTz9SnAW7JagHb+/oOfzXvGCBHntkBjo0vyB/6yYOvv7mnCD89jwfITLj4M6eEc580MFt/M691GbQ+ysfnzQBhQ+obZx53Q2C2Pup5/Zqr4zwv9A70khKfKXdDYLd+jZ1fcG0BbM3POyecjecZ0gBDwJYPfD6/YBakWdcBCL5/9Wre0eEwnmeGpj655ht2BYLP53+8LijCrwYPEaCXKs8zq9znQPwNq/NzXgdU8FnhsQVIjo+T3CseVsMpYdiuV7KBH18RATITjsLjPgAZdh3z+0ps8/oDV4Oz8piOMAIPNjv1/RLFXYPH1eB0HrvDjcCD2Zvv18QeYie4XZqg8Dg63Ag87E5ve65ICR4iQE48MwN4GF6PhFWkboag8rwieObsPDOaBvhBls3ZRlnYBTxuhiD7tXPCxS0og3nwasf36/lCl56uEJHHU+eEi5MkOo9LZ8QvF/P/EvljTyOqXO84O1zcAWfGtT7ATp76bgfEBYouUwau+MoaIC3hHHlm3E7T1bMGDoPrexvYFX0ujYDPKAnnHJ8rel/ERx//uw9+d4lbScpPO/DMUXlcLkTAilEmd5jsmAnnMufmr145O5yFZ1rRM/r8FJtrs+g+xBXLLo6tGZw94eIkicZDXz/AT5WwuaMJu1+G7nBc65Wzw8VJEkUzLtfCYUuJbO6Xwa5RdEk4DsadHS5uo0E8dDvgION0w0s45HD07/XKOeHsPMgO6Msh+NKBz3M5Q4ZjuyUc1oEIR4jjILq90e2AfbrhCedyETbHxR0dLq6STOMmR+8+2KXXkRirGzax+zVdJkGUhJuatrm1S/fBazdm92tiCecyaYBfHBMuPq2CYC434+LWWfbpRpwGcjlPxz9zSrjZYdwaX3hjdLemLOweOhfLdhhSHXno7oabNYt75wxhN51lqSeGuXDcIeFso+kMPd3M06YM3UAW5gguPUibdBMJ98LOQ3cDLDwM3UAWdhMqvcrWLRtPuBf27kMND4+t66TYPqNiw7zPZJF+Hx25iqAEyMYzc0XD4YrGWR/W4cGXEVCRQG0ROatz5qGHB5tnMw4PEaBogadlnDYG4QHy3HvgfvTxwkPexn1Nzbi3V1aHs+DQF6rweRyLG7ctamAJ52IJYUvCWcrrGepE++0NZga+ntSm6NhTxoH3ZMJZeK5o5QXArlCOMZr4kGpg04ZBGWcmXIHkoZkBMY1jsqxjF/HcjQEep/M8/8VbtvEnWHhYzeOswiwhmqWXccV5M+Ge/4bX1dQ7uXms0HkMM1CFW8LizVsaEPiCJdzvGA+1robYSBpJMX/YkyE84xb3qF2I/2zw/PA7lm60HCWW3Fg91cVR67hpt6gpx3/UE+7l/a+DvYBfw7KNeWWAqxHBu5DL3FsHKtyv6TjvqV5wgOM8XrbJIh5eQ1+f5+TLx1Qe3RCoOOAOe4rQo3mbrkMc6IQ6rHLq9XDz/7m/H4ADW6s4z6M/YRV/mNXiAdXkOP4j4nn1+/2DknDUu9FhHfMClmsgNOGm7VYnIJdD+YZ4/piZ+UQffcMEzmPUbVaRj+e6cwH6Mv/D/f3Dwx8fw/RiojDOzqPqwisQLP4m8zy0qb0M4DiR2pgeT7yOe8LqPv0kF/iGcL5/o0YH4AMPi5PZ3tTAPQEB0de0f5LDQxumLDhj8AIDCE84N6Dwnw8P9wINp0DgPO5ASop4omJ0ldqH4J8P3yk8yAoInHFYm6lN8pl9e5RxSEA8fzrykOMOw4c/epTloYoHzo9Sg98evv/lxAOKBE5sd+xPXt8hgBZvHEsf7qfvjjz4Q+smA8cGtAYdbBnx/NfOw73dW504HCtQtFC0D0SOPBx/YHku50Tg2IBW72yuIPM8WHggRww7kxIdWRYguys48PAtoutEUpODY3907FqYzDnuf99LKyKRa9erJM7lBOHIT14mgbL7ZIi49re/sBcAd0LQsHyK8mjajBBEKOcA6XOcmW6cxabHXhU4aaNmCVGhRZmFQ3AQseCwPOc7qhqXlk60euD4UFy+RRRs8jPIx1dRu4qc4Dn0IrnnwBtLcGK1cf9qCVU7luexRyMnYeJKLPj2ztJzJs3YSG1aOhEK0bXpC9zbVsH61PuxTncGq7Fuzblo4e4tVF2tfmJJtcntOqaOrT8FEo0U9nnI8eGDVQsNqgkmtuuY2rD9HIj8bPbwgbXjRGITnmu6GodWIOTdWdvPRaRq41rHGVqbA36xRQnO4QT7mlUoRO4/qPOEgqPK7Wdo5J7zhIKjqnFM/QWn1OUTsDW7NpyTLlWb+DGHps1LG1EqdvzkUg3TFtmNYrGn5GqO2jJ/OwzRPMmOQ6qBYhRTftDw30Ajq7F1mUqN85cM/dfG1lPvN4ECBQoU6N+ozNLSqaIlRacrJXPfirZL3nd6W8qMr5XetbKcVJVYTiT/lje2V/R92/q+pLJnecXtgyZFmcxKMpFIShmk0u22vL2txyhTWkZ/rqAd0pm843asLfWs7URiWU8maRk1PGEk3W0ykVT/UKhLTm+fOC1hPKHMGQ60YvCETtHm6RhaN7wIHiVcyW1tG+MpIc6zR2/bKLLwZJT+pG5jPOjl5NKjt20UWXjkzEpoASLjkxzV4dLnZfRvKd+sppW/z9EW2RelTr6ZL6ext5Sr6F+dXq8p4R9UNg7Tjy3J7+xg77TxyJmVyFh50ObyKCyZ82qvfZQPSf0jURABal250kVbQtk85rx/BNu5XA5W1VZ38n3Q7YU67a4AhFzHaFhTbPfbXRH2qp38B6WFUu8ItEX0eXmTyMoTWk5grqZtZZaTyyPZW6mCGgXy+Vy/2RcgAKgFlV4FbXWNL755VJHSaakpwFxP/rssdgEEPfRyvy1AmNMOlKCIvoN0Hr1XPDpSjqx2YTmdLuUFIPYNIBvPUkJPLdmlV0pIt8vJpVELBOkDgGJT/jLKqCm5npQJZcoACj0dR2yrbakioLy8ke60IRT6UjqURq8B9cB0W1R2hnoAfKgqGVbtApUVfbDxcXYe2ZpvDZ7k30hyl7odFagsgqa6hb7birrVQS1QP6+cE6ragT0BiiXtQKAmlPwWqOBWRS1Qkgg+aBuC9rnyUaIebxvPLcFzurKycrqdQK8lRvSDsqi3WBJAW91KQ9hVm94HekKh3VA7EvFoTS2JMFdSj9NY0xCoAW0Kot4J01i8HeNj5JvWf0pnmI2PzFMCEGovtjUM9JJopP4HoCUX4ukZ4OqBBne6DSpp5b9mTOQkrGRceCQLj2rjiZFSzuRBX63OU9GaJ4lQMHiagtYqjKdt8Aiq06WBGgoUOdGwKJS/Wi+082w7+XUolBg1QIN4zPhUXXjQS33t43LnOo/RnrKodTMHnoTTeIqHzWeeLvYta10d59ETE41FedTOdKWr+pzMc66/81ykxkcyKwGCZ8Vnnq7WTCgaI2ZVsPcfnQfBCkIln4ego++BQt78f2jfhJ3nzKwEHoEn09Y9IKQ4VofKE5JH3Ha/amSnPBDp2whWZ1si+7mENfsW51lCf4zkBx2Tx/S3CtQKBDR0GIaNRt60BubAE6pWiBKlI0LDsHuCoO87w2dwoRI+EcV5MiNPgKrGd1cCeHy0kQAVQR9UCknoau1rAswPtF5/Xsn1ie8zXQHaSISyVtQHZWXCY4yUUiKJldFmpSCnoTEtGk6ZPgBaQ8rGMC6hgqajvSgC4YP8qtTu6nFEA1FbxZXQSJlXhxtU1FWa+WqnLGkph4ZnUJHfWfrQ1SsFtZxOnpbkFQRpKWkuH6BdqDJFBZyyZzs52vQn3RNygpCTvbaKSlNB6LbPUXtRSSwcaTEot0Uh1+/1j9pljQa9QxDEtoQQ5c1crofQOzkEJL8udoWeFtCKKHQrvV4X6pZyqywYIKCkUqphyzuh0+VkUt2l7hlt9SCNvlGkPPr+OspmHs1o0spr1bwejk6v0q70yhn9K+g1kXr9EpplqJvKt39eQSyiKKBOKGjVXaasvNOc/yxtmzo7lfA2b5+dKS8vL29vL62MRuNdHpxGajclSSpXka/BnDl9ehILgw6qHulJJVWAUVk/WTWPTIRz0RxJn6jOu6KZYmkRy7enKTSIGSNMSOq20y7HPgWVc8Bk6HXP3Y59CspUtLFTHgIMZ3jCktoCyFWa1XzvqP3koyMr3YRi9+hIrHSe6ohjVRoNpxLrgT1QoECBAgUKFChQoECBAgUKFChQoECBAgWaXP0fQyQlZ8R0JeQAAAAASUVORK5CYII=',
        },
        {
          name: 'Redis',
          image:
            'https://www.zdnet.com/a/img/resize/71ddc36582de6fc1f138f5a86acca7200d631080/2020/05/11/f9afed5d-33cd-438f-ba73-31b31abba8e1/redis-logo-2.png?width=370&fit=bounds&auto=webp',
        },
      ],
      buildTools: [
        {
          name: 'VS Code',
          image:
            'https://pbs.twimg.com/profile_images/1410632439370641409/Pt-7RucE.jpg',
        },
        {
          name: 'NPM',
          image:
            'https://d33wubrfki0l68.cloudfront.net/252ec52bc63b79df9967ff231797eef6c5e0ab8c/99fe8/static/img/npm-logo.webp',
        },
      ],
      other: [
        {
          name: 'Github',
          image:
            'https://d33wubrfki0l68.cloudfront.net/332911b40f844e95266fcbc83b36fbd44a467d62/0617e/static/img/github.webp',
        },
        {
          name: 'Heroku',
          image:
            'https://d33wubrfki0l68.cloudfront.net/e44bd765fb81b06475216da561e4a28295a54c52/5dc9d/static/img/heroku.webp',
        },
        {
          name: 'Netlify',
          image:
            'https://cdn.sanity.io/images/ti7si9cx/production/656e951d31f3dc0f061a57466d01def70a81a6af-1500x1000.gif?w=1382',
        },
      ],
    },
  ],
  blogPosts: [
    {
      title: 'How to Create a Basic Server Using Node.js',
      desc: 'Here we are going to understand how to create a basic server using node.js',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUSAfj30TASitki3Ib6avccGcVK8DSNrRhw&usqp=CAU',
      url: 'https://medium.com/geekculture/how-to-create-a-basic-server-using-node-js-b696ce54c90a',
      postedOn: 'medium.com',
    },
    {
      title: 'OOP in JavaScript to Create Objects.',
      desc: 'What is object in JavaScript?',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUSAfj30TASitki3Ib6avccGcVK8DSNrRhw&usqp=CAU',
      url: 'https://medium.com/geekculture/oop-in-javascript-to-create-objects-6d028e27ae0b',
      postedOn: 'medium.com',
    },
    {
      title: 'Express server using npm in node.JS and handling routes.',
      desc: 'How to create a basic server using express in node.JS',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUSAfj30TASitki3Ib6avccGcVK8DSNrRhw&usqp=CAU',
      url: 'https://medium.com/geekculture/express-server-using-npm-and-handling-routes-524d7a6205a7',
      postedOn: 'medium.com',
    },
    {
      title:
        'How to handle JSON/form data from the body of the URL in node.JS and express.',
      desc: 'Sending data using body of URL',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRUSAfj30TASitki3Ib6avccGcVK8DSNrRhw&usqp=CAU',
      url: 'https://medium.com/geekculture/how-to-handle-json-form-data-from-the-body-of-the-url-in-node-js-and-express-4193837c39c7',
      postedOn: 'medium.com',
    },
    {
      title: 'Registration/Login using the MongoDB to store data in expressJS',
      desc: 'Authentication in expressJS',
      image: 'https://miro.medium.com/max/1400/1*Dl0F36mQqB_LNtA_dKd3ug.jpeg',
      url: 'https://medium.com/nerd-for-tech/registration-login-using-the-mongodb-to-store-data-in-expressjs-dba79c8886f2',
      postedOn: 'medium.com',
    },
    {
      title: 'Github-Strategy for Oauth using Passport in nodeJS.',
      desc: 'how to use PassportJS npm package to authenticate users using 3rd party application.',
      image: 'https://miro.medium.com/max/1400/1*wlcQ8w2g5vlENEWUDzaRog.jpeg',
      url: 'https://medium.com/geekculture/github-strategy-for-oauth-using-passport-in-nodejs-1e878ff4b892',
      postedOn: 'medium.com',
    },
    {
      title: 'JWT(jsonwebtoken) Token Based Authentication using nodeJS.',
      desc: 'Token based authentication in expressJS',
      image: 'https://miro.medium.com/max/700/1*mlWL_BxFFQiBuV8h5Lqeqw.png',
      url: 'https://medium.com/geekculture/jwt-jsonwebtoken-token-based-authentication-using-nodejs-6af661d5a64',
      postedOn: 'medium.com',
    },
    {
      title: 'Render Props in ReactJS.',
      desc: 'What are Render Props?',
      image: 'https://miro.medium.com/max/1400/1*2-oIp93Gx4J0l6_nVb4qbg.png',
      url: 'https://medium.com/geekculture/render-props-in-reactjs-d672e3106bc1',
      postedOn: 'medium.com',
    },
    {
      title: 'Higher-Order Components (HOC’s) In ReactJS.',
      desc: ' What is HOC’s in ReactJS?',
      image: 'https://miro.medium.com/max/700/1*qzdgm6IoYSCB3YJqfO8IHQ.png',
      url: 'https://medium.com/geekculture/higher-order-components-hocs-in-reactjs-c405d7d6a8cd',
      postedOn: 'medium.com',
    },
    {
      title: 'Context-API in ReactJS, Why and How?',
      desc: 'How to use Context-API in ReactJS.',
      image: 'https://miro.medium.com/max/1400/1*zQE3KTxljMTkBxu0mZFB-g.jpeg',
      url: 'https://medium.com/geekculture/context-api-in-reactjs-why-and-how-a493fe7705de',
      postedOn: 'medium.com',
    },
    {
      title: 'Using Redis To Cache Data In NodeJS And ExpressJS Server.',
      desc: 'How to Cache data using Redis Server.',
      image: 'https://miro.medium.com/max/700/1*8fPAos1GN77yVMlUv7_ZOA.png',
      url: 'https://medium.com/geekculture/using-redis-to-cache-data-in-nodejs-and-expressjs-server-f6a7596dd77e',
      postedOn: 'medium.com',
    },
  ],
  projects: [
    {
      title: 'Blog App',
      image: 'https://www.loom.com/embed/18a6c9ce5b6a4bf8b5a566791bf599a5',
      url: 'https://oshingate-blog-app.netlify.app',
      TechStack: ['ReactJS', 'ExpressJS', 'MongoDB'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Shopify Clone',
      image: 'https://www.loom.com/embed/c8a6a542c1824667b7608f24e97edeeb',
      url: 'https://oshingate-shoopifai.netlify.app',
      TechStack: ['ReactJS', 'ExpressJS', 'MongoDB', 'Bulma CSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'E-Commerse Site',
      image: 'https://www.loom.com/embed/3d0dd225fb244ef9adfa13f60243a1e8',
      url: 'https://oshingate-shopping-site.netlify.app',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Counter App With Redux',
      image: 'https://www.loom.com/embed/1dd7413dad03409f89fd9eace1c6f1b1',
      url: 'https://oshingate-counter-with-redux.netlify.app/',
      TechStack: ['ReactJS', 'Redux', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Activity Tracker',
      image: 'https://www.loom.com/embed/36c16238377f4e65ba64e801bb39436e',
      url: 'https://oshingate-activity-trackers.netlify.app',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Live Code Editor',
      image: 'https://www.loom.com/embed/543c938810714eeab5ac5b19a57b5680',
      url: 'https://oshingate-live-code-editor.netlify.app',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Event Manager',
      image: 'https://www.loom.com/embed/268dbc269d4244cd8325945d5b534dbb',
      url: 'https://oshingate-event-manager.herokuapp.com/',
      TechStack: ['ExpressJS', 'EJS', 'SCSS'],
      hostedOn: 'On Heroku',
    },
    {
      title: 'Podcast App',
      image: 'https://www.loom.com/embed/0e1249261b294408bfb2e93dd33cdc96',
      url: 'https://oshingate-event-manager.herokuapp.com/',
      TechStack: ['ExpressJS', 'EJS', 'SCSS'],
      hostedOn: 'On Heroku',
    },
    {
      title: 'Quiz App',
      image: 'https://www.loom.com/embed/cf56a2577cef4940954abb3cb66371bb',
      url: 'https://oshingate-quiz-app.netlify.app',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
    {
      title: 'Github Battle',
      image: 'https://www.loom.com/embed/8c15f6cb7534428d8cd325bdcf915ab0',
      url: 'https://oshingate-github-battle.netlify.app',
      TechStack: ['ReactJS', 'HTML', 'SCSS'],
      hostedOn: 'On Netlify',
    },
  ],
};

export default data;

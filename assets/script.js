window.onload = function() {

    let bg = document.getElementById("background");
    let parch = document.getElementById("pres");
    let text = document.getElementById("text");
    let card = document.getElementById("card");
    let content = document.getElementById("content");
    let fight = document.getElementById("fight");
    let persoChoisi;
    let character;
    let hp;
    let att;
    let def;
    let xp;
    let fatigue = 0;
    let time = 0;
    let repos = false;
    let degats = 0;


    class perso {
        constructor(name, hp, att, def, xp) {
            this.name = name;
            this.hp = hp;
            this.att = att;
            this.def = def;
            this.xp = xp;
        }
        getName() {
            return this.name;
        }
        getHp() {
            return this.hp;
        }
        getAtt() {
            return this.att;
        }
        getDef() {
            return this.def;
        }
        getXp() {
            return this.xp;
        }
    }
    let drakon = new perso("Drakon", 10, 8, 1, 0);


    text.innerHTML = "Bonjour et bienvenue dans mon jeu.<br>Ce dernier est un RPG nomme Le Roi Perdu dans <br>l'univers de la Grece antique.<br>Vous allez donc suivre un scenario ecrit par<br>mes soins et etre confronte a differents choix<br>qui influeront sur votre aventure.<br>Tout d'abord selectionnez un personnage.<br> <button class=\"continue\" id=\"cont\">Suivant</button>";
    let continu = document.getElementById("cont");

    continu.onclick = function() {
        parch.style.display = "none";
        card.style.display = "flex";
        card.innerHTML = "<img src=\"assets/images/percy.png\" id=\"percy\"class=\"cart\"><img src=\"assets/images/satyre.png\" id=\"satyre\"class=\"cart\"><img src=\"assets/images/ashley.png\" id=\"ashley\" class=\"cart\"><img src=\"assets/images/anabeth.png\" id=\"anabeth\"class=\"cart\">";

        let percy = document.getElementById("percy");
        let anabeth = document.getElementById("anabeth");
        let satyre = document.getElementById("satyre");
        let ashley = document.getElementById("ashley");
        let foot = document.getElementById("footer");

        percy.onclick = function() {
            persoChoisi = "percy";
            hp = 17;
            att = 7;
            def = 1;
            xp = 0;
            footer.innerHTML = "Etes-vous sur ? <br> <button class=\"continue\" id=\"confirm\">Confirmer</button>";
            percy.style.border = "solid red 5px";
            anabeth.style.border = "none";
            satyre.style.border = "none";
            ashley.style.border = "none";
            let confirm = document.getElementById("confirm");
            confirm.onclick = function() {
                console.log(persoChoisi);
                page1();
            }
        }
        anabeth.onclick = function() {
            persoChoisi = "anabeth";
            hp = 17;
            att = 7;
            def = 1;
            xp = 0;
            footer.innerHTML = "Etes-vous sur ? <br> <button class=\"continue\" id=\"confirm\">Confirmer</button>";
            anabeth.style.border = "solid red 5px";
            percy.style.border = "none";
            satyre.style.border = "none";
            ashley.style.border = "none";
            let confirm = document.getElementById("confirm");
            confirm.onclick = function() {
                console.log(persoChoisi);
                page1();
            }
        }
        satyre.onclick = function() {
            persoChoisi = "satyre";
            hp = 17;
            att = 6;
            def = 0;
            xp = 0;
            footer.innerHTML = "Etes-vous sur ? <br>  <button class=\"continue\" id=\"confirm\">Confirmer</button>";
            satyre.style.border = "solid red 5px";
            anabeth.style.border = "none";
            percy.style.border = "none";
            ashley.style.border = "none";
            let confirm = document.getElementById("confirm");
            confirm.onclick = function() {
                console.log(persoChoisi);
                page1();
            }
        }
        ashley.onclick = function() {
            persoChoisi = "ashley";
            hp = 17;
            att = 7;
            def = 1;
            xp = 0;
            footer.innerHTML = "Etes-vous sur ? <br>  <button class=\"continue\" id=\"confirm\">Confirmer</button>";
            ashley.style.border = "solid red 5px";
            anabeth.style.border = "none";
            satyre.style.border = "none";
            percy.style.border = "none";
            let confirm = document.getElementById("confirm");
            confirm.onclick = function() {
                console.log(persoChoisi);
                page1();

            }
        }
    }

    page1 = function() {
        character = new perso(persoChoisi, hp, att, def, xp);
        console.log(character.getName());
        console.log(character.getHp());
        console.log(character.getAtt());
        console.log(character.getDef());
        console.log(character.getXp());
        parch.style.display = "block";
        text.innerHTML = "Dans un monde antique plein de tensions inter <br> cites, Albos la cite coeur de l'empire <br> joue un role de mediateur et forme les jeunes <br> heros de ce monde. <br> Suite a la disparition du roi de l'ile de <br> Megalonisos, Menchu la deesse mere decide <br> de lancer une quete pour le retrouver afin <br> d'eviter une guerre d'anvergure entre <br> Megalonisos et l'ile de Craya. <br> Vous etes donc un heros cherchant des <br> informations concernant cette fameuse <br> disparition. Vous decidez donc de commencer par <br> le plus evident, partir pour Megalonisos.<br> <button class=\"continue\" id=\"next\">Suivant</button>";
        card.innerHTML = "";
        card.style.display = "none";
        footer.innerHTML = "";
        footer.style.display = "none";
        let next = document.getElementById("next");
        next.onclick = function() {
            page2();
        }
    }

    page2 = function() {
        bg.style.backgroundImage = "url(assets/images/port2.jpg)"
        text.innerHTML = "Apres un voyage d'une journee en bateau <br> jusqu'a l'ile de Panos, vous pouvez : <br><br> Aller chercher un bateau pour prendre <br> la mer directement <br><br> Aller passer la nuit a l'auberge et vous reposer";
        content.style.display = "block";
        content.innerHTML = " <img src=\"assets/images/boat.png\" id=\"boat\" class=\"choix\" ><img src=\"assets/images/sleep.png\" id=\"sleep\" class\"choix\">"
        let boat = document.getElementById("boat");
        let sleep = document.getElementById("sleep");
        boat.onclick = function() {
            fatigue++;
            page3();
        };
        sleep.onclick = function() {
            repos = true;
            fatigue = 0;
            time++;
            page3();
        };
    }

    page3 = function() {
        if (repos == true) {
            text.innerHTML = "Apres une nuit de repos, vous arrivez donc <br> au port et demandez a un pecheur de vous <br> conduire a Megalonisos par le chemin le plus <br> court. Mais il refuse categoriquement vous <br> expliquant qu'au milieu du trajet se trouveraient <br> deux creatures legendaires : <br> Charribde et Scilla. <br> <br> D'apres la rumeur, ces deux creatures couleraient <br> tous les navires les approchant, c'est <br> pourquoi personne ne veut plus passer <br> par cette route. Neanmoins le pecheur vous <br> propose de vous preter un de ses vieux bateau <br> et d'y aller seul, ou alors de faire un detour <br> a pieds jusqu'a Icaia puis de prendre la mer.";
        } else {
            text.innerHTML = "Vous arrivez donc au port et demandez <br> a un pecheur de vous conduire a <br> Megalonisos par le chemin le plus court. <br> Mais il refuse categoriquement vous <br> expliquant qu'au milieu du trajet se trouveraient <br> deux creatures legendaires : <br> Charribde et Scilla. <br> <br> D'apres la rumeur, ces deux creatures couleraient <br> tous les navires les approchant, c'est <br> pourquoi personne ne veut plus passer <br> par cette route. Neanmoins le pecheur vous <br> propose de vous preter un de ses vieux bateau <br> et d'y aller seul, ou alors de faire un detour <br> a pieds jusqu'a Icaia puis de prendre la mer.";
        }
        content.innerHTML = "<img src=\"assets/images/boat.png\" id=\"boat\" class=\"choix\" ><img src=\"assets/images/pecheur.png\" id=\"pech\"><img src=\"assets/images/foot.png\" id=\"foot\" class=\"choix\" >";
        let boat = document.getElementById("boat");
        let foot = document.getElementById("foot");
        boat.onclick = function() {
            fightCharibde();
        };
        foot.onclick = function() {
            if (character.getName() == 'anabeth') {
                athena();
                time++;
                fatigue++;
            } else if (character.getName() == "percy") {
                content.innerHTML = "";
                text.innerHTML = "Vous avez dans votre sac une perle offerte par <br> votre pere souhaitez-vous l'utiliser ? <br> <button id=\"ok\">Oui</button><button id=\"notok\">Non</button>"
                document.getElementById("ok").onclick = function() {
                    tir();
                }
                document.getElementById("notok").onclick = function() {
                    fight.style.fontSize = "7vh";
                    mega();
                }
            } else {
                mega();
            }
        };
    }

    athena = function() {
        bg.style.backgroundImage = "url(assets/images/path.jpg)";
        content.innerHTML = "<img src=\"assets/images/ath.png\" id=\"ath\" class=\"perso\">";
        text.innerHTML = "Sur le chemin pour Megalonisos, alors que vous <br> passez sur une plage deserte, vous apercevez au <br> loin sur un ponton une femme, assise en train <br> de vous regarder. En vous approchant, vous <br> remarquez que ce n'est pas n'importe qui, mais <br> la deesse Athena votre mere. On pouvait voir <br> dans son air grave l'inquietude qui la rongeait. <br> Et en effet elle vous fit part de ses craintes <br> concernant la situation actuelle et les tensions, <br> commençant a prendre le dessus sur la paix jusqu'a <br> present dominante, meme au sein de l'Olympe. <br> Car si certains dieux se contrefichent de ce qui <br> arrive aux humains, d'autres sont totalement <br> contre cette guerre naissante et au contraire, <br> certains pourraient profiter de cette derniere. <br> Et c'est donc pour cela qu'Athena est venue vous <br> voir, pour vous prevenir de vous mefier d'Ares <br> le dieu de la guerre, ainsi qu'Hades, dieu des enfers. <br> Car ce sont les dieux pouvant tirer un maximum <br> d'interet d'une guerre de cette envergure, <br> il faut donc se mefier d'eux. <br> <button class=\"continue\" id=\"conti\">Continuer</button>"
        document.getElementById("conti").onclick = function() {
            mega();
        }
    }

    fightlost = function() {
        fight.style.fontSize = "3vh";
        content.style.display = "none";
        parch.style.display = "none";
        fight.style.top = "20vh";
        bg.style.backgroundImage = "url(assets/images/go2.png)";
        fight.innerHTML = "Vous tentez donc d'affronter votre adversaire, mais malheureusement vous ne savez rien de ses capacites. Vous vous faites donc detruire par cette creature bien plus forte que vous";
    }

    fightCharibde = function() {
        let scylla = new perso("Scylla", 9999, 9999, 9999, 0);
        bg.style.backgroundImage = "url(assets/images/cands.jpg)";
        text.innerHTML = "Arrive en pleine mer, vous commencez a sentir le <br> vent tourner dangeureusement, et la houle se <br> lever, puis vous commencez a appercevoir une <br> enorme crevasse  en pleine mer, entouree de <br> rochers, qui vous attire. <br> Puis une enorme forme sous l'eau commence a <br> tourner autour du bateau et dirige la houle vers <br> la crevasse. Vous vous rendez vite compte que <br> vous avez affaire a Charibde, et tentez <br> donc de vous en echapper. <br> En vous eloignant vous voyez apparaitre <br> derriere la brume une immense falaise avec <br> un immense monstre accroche a cette derniere. <br> C'est Scylla qui vous attaque!!!";
        content.style.display = "flex";
        content.innerHTML = "<img src=\"assets/images/" + persoChoisi + ".png\" id=\"scylla\" class=\"fightCard\"> <h1>VS</h1> <img src=\"assets/images/scylla.png\" id=\"scylla\" class=\"fightCard\">";
        fight.style.display = "block";
        fight.innerHTML = "<span id=\"hp\">Hp : " + character.getHp() + "</span> <br><span class=\"fi\"  id=\"att\">Attaque</span> <span class=\"fi\"  id=\"bag\">Sac</span> <br> <span class=\"fi\"  id=\"run\">Fuite</span>";
        let att = document.getElementById("att");
        att.onclick = function() {
            fightlost();
        }
        let sac = document.getElementById("bag");
        sac.onclick = function() {
            if (character.getName() == "percy") {
                fight.style.fontSize = "3vh";
                fight.innerHTML = "Vous n'avez qu'une perle offerte par votre pere. Voulez-vous tenter de l'utiliser ? <button id=\"ok\">Oui</button><button id=\"notok\">Non</button> ";
                document.getElementById("ok").onclick = function() {
                    fight.style.fontSize = "7vh";
                    tir();
                }
                document.getElementById("notok").onclick = function() {
                    fight.style.fontSize = "7vh";
                    fightCharibde();
                }
            } else {
                fight.innerHTML = "Vous n'avez rien dans votre sac<button id=\"kk\">OK</button>";
                document.getElementById("kk").onclick = function() {
                    fight.style.fontSize = "7vh";
                    fightCharibde();
                }
            }
        }
        let run = document.getElementById("run");
        run.onclick = function() {
            if (character.getName() == "percy") {
                fight.style.fontSize = "3vh";
                content.style.display = "none";
                parch.style.display = "none";
                fight.style.top = "20vh";
                fight.innerHTML = "Vous tentez de fuir de cette situation mais vous derivez vers Scylla qui commence a vous aspirer dans son syphon. Mais heureusement, dans l'ecume d'une immense vague apparait Poseidon, votre pere, lancant son trident au centre du typhon et deviant les courants afin de vous permettre de fuir <br> <button class=\"continue\" id=\"next\">Suivant</button>"
                document.getElementById("next").onclick = function() {
                    fight.style.display = "none";
                    mega();
                }
            } else {
                fight.style.fontSize = "3vh";
                content.style.display = "none";
                parch.style.display = "none";
                fight.style.top = "20vh";
                bg.style.backgroundImage = "url(assets/images/go2.png)";
                fight.innerHTML = "Malheureusement, il est tres difficile de fuir de ce piege. Ent tentant de fuir Charibde, votre navire se fait aspirer par Scylla present juste a cote"
            }
        }
    }

    mega = function() {
        bg.style.backgroundImage = "url(assets/images/city2.jpg)";
        parch.style.display = "flex";
        content.innerHTML = "";
        text.innerHTML = "En arrivant a Megalonisos, vous decidez de <br> vous rendre directement au palais afin de <br> recuperer des informations aupres des <br> conseillers du roi. Ces derniers n'ayant aucune <br> information ne vous apprennent pas grand chose <br> si ce n'est que le roi a mysterieusement <br> disparu sans laisser aucune trace. <br> Ils viennent donc de faire partir un navire <br> avec un emissaire a destination de Craya afin de <br> limiter les tensions le temps de retrouver le <br> roi et reprendre les negociations. Ils vous <br> laissent donc acces a un navire marchand en <br> egalement partance pour Craya <br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            content.innerHTML = "<img src=\"assets/images/ares.png\" id=\"ares\" class=\"perso\">";
            text.innerHTML = "En sortant du palais et en vous dirigeant <br> vers le port, vous apercevez quelqu'un en <br> armure de guerre se tenir debout vers la mer. <br> Cela vous parait etrange et vous choisissez <br> donc de vous approcher. Arrive a quelques <br> metres, cet homme commence a parler : <br> \"Vous devriez vous depecher... <br> Du cote de craya ce ne sont pas des emissaires <br> qui ont ete envoyes mais bien des navires de <br> guerre. Il vous faut vite les intercepter avant <br> que ca degenere\" <br> Puis alors que l'homme se tournait, vous <br> pouviez immaginer qui il etait. Et lorsque son <br> visage fit face au votre, vous voyez un <br> sourire confiant se former sur ce dernier, puis <br> l'homme disparut dans un flash lumineux. <br> C'etait evidemment Ares, dieu de la guerre. <br> Suite a cet evenement pour le moins <br> troublant, vous partez donc pour l'ile de <br> Craya a bord du bateau marchand tout en <br> repensant a ce qu'Ares vous avait dit. <br> <button class=\"continue\" id=\"next\">Continuer</button>";
            document.getElementById("next").onclick = function() {
                content.innerHTML = "";
                tir();
            }
        }
    }

    tir = function() {
        fight.style.display = "none";
        content.innerHTML = "";
        bg.style.backgroundImage = "url(assets/images/tir.jpg)";
        fatigue = 0;
        text.innerHTML = "En cours de route, vous vous arretez dans un village forteresse sur une ile a mi-chemin vers Craya. Apres une nuit de repos, vous vous appretez a partir a l'aube quand, aux abords d'un rempart, vous apercevez s'approchant de la forteresse, un convoi de trois navires de guerre portant le pavillon de Craya. Vous vous rememorez alors les paroles d'Ares qui resonnent etrangement fort dans votre tete. \"Ils sont bientot a portee, tu es sur un rempart, il y a un trebuchet a quelques metres, tire ou ce sera la guerre ! \" <br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            content.style.display = "flex";
            content.innerHTML = "<img src=\"assets/images/ares.png\" id=\"follow\" class=\"perso choix\"><img src=\"assets/images/canon.png\" id=\"canon\" class=\"choix\"><img src=\"assets/images/foot.png\" id=\"nostop\" class=\"choix\">";
            text.innerHTML = "Vous vous retournez alors et voyez Ares derriere vous observant les navires au loin avec un air grave. <br> \"Maintenant il faut prendre une decision. Tirer et stopper ce conflit des maintenat au risque de vexer Craya, ou attendre que les vaisseaux diplomatiques arrivent, que les emissaires soient ecoutes (ce qui n'est pas certain au vu des navires devant nous), et que ces navires de guerre ne soient pas en direction de Megalonisos. A toi de decider\" <br> Puis il part en marchant dans les ruelles de la cite, vous laissant seul a prendre cette lourde decision.";
            document.getElementById("nostop").onclick = function() {
                content.innerHTML = "";
                labyrinth();
            }
            document.getElementById("follow").onclick = function() {
                content.innerHTML = "";
                follow1();
            }
            document.getElementById("canon").onclick = function() {
                content.innerHTML = "";
                shot();
            }
        }

    }

    shot = function() {
        bg.style.backgroundImage = "url(assets/images/go2.png)";
        text.innerHTML = "Vous prenez donc la decision d'utiliser ce trebuchet dans le but de mettre fin a ces tensions grandissantes. <br> Vous tirez donc sur le navir menant le convoi et le touchez de plein fouet, il coule en quelques secondes, et alors que vous rechargez le trebuchet pour un nouveau tir, les navires restant ne changent absolument pas de cap et continuent a avancer dans la direction de Megalonisos. Vous partez egalement afin des les rattraper mais malheureusement vous n'arrivez pas a temps. Lorsque vous arrivez a Megalonisos, l'ile est en proie aux flammes et completement detruite. Vous ne pouviez clairement pas detruire un convoi de navires de guerre a vous tout seul..";
    }

    follow1 = function() {
        if (character.getName() == 'ashley') {
            text.innerHTML = "Vous suivez Ares des les ruelles de la forteresse, et le voyez entrer dans une maison <br> <button class=\"continue\" id=\"next\">Continuer</button>";
            document.getElementById("next").onclick = function() {
                follow2();
            }
        } else {
            text.innerHTML = "Vous essayez de suivre Ares dans les ruelles de la forteresse mais n'ayant pas l'habitude de suivre une cible, vous le perdez au coin d'une rue, et decidez donc de poursuivre votre aventure vers Craya <br> <button class=\"continue\" id=\"next\">Continuer</button>";
            document.getElementById("next").onclick = function() {
                labyrinth();
            }
        }
    }

    follow2 = function() {
        text.innerHTML = "Vous vous approchez assez pour voir qu'a l'interieur de cette maison se trouve un homme qui semble etre assez proche d'Ares et qui l'ecoute attentivement. Voulez-vous vous approcher pour les ecouter ou bien les interrompre des maintenat ?";
        content.innerHTML = "<img src=\"assets/images/dude1.png\" id=\"dude\" class=\"perso choix\"><img src=\"assets/images/ear.png\" id=\"ear\" class=\"choix\">";
        document.getElementById("dude").onclick = function() {
            content.innerHTML = "";
            unv2();
        }
        document.getElementById("ear").onclick = function() {
            content.innerHTML = "";
            text.innerHTML = "Vous ecoutez donc cette conversation et decouvrez que cet homme est en fait le fils d'Ares et que tous les problemes actuels viennent de ce dernier et qu'il souhaite tout simplement une nouvelle guerre d'anvergure. Mais avant d'avoir plus d'informations, Ares se tourne dans votre direction, mais vous parvenez a vous cacher a temps, et decidez donc d'aller avertir le gouvernement de Craya au plus vite <br> <button class=\"continue\" id=\"next\">Continuer</button>";
            document.getElementById("next").onclick = function() {
                labyrinth();
            }
        }
    }

    unv2 = function() {
        bg.style.backgroundImage = "url(assets/images/go2.png)";
        text.innerHTML = "Vous deboulez dans la maison dans le but de les stopper, mais a peine votre arme sortie que vous vous faites plaquer violement contre le mur par Ares et decapite instantanement. (Ouais il rigole pas...)";
    }

    labyrinth = function() {
        text.innerHTML = "En vous dirigeant vers le port de la forteresse, vous voyez au detour d'une ruelle sombre un petit passage en escalier avec une inscription au dessus : /_\\ <br> C'est un Delta, le symbole de Dedale le grand inventeur. Cet escalier serait donc une entree vers son labyrinthe souterrain ? Si c'est le cas ce serait l'occasion d'accelerer le trajet, il paraitrait que le temps s'ecoule differement a l'interieur. Ca vous permettrait d'aller bien plus vite qu'a bateau, d'arriver avant que les navires de guerre n'arrivent a Megalonisos, et donc retablir la paix plus rapidement. <br> Mais cela reste tres dangereux, il faut un don pour ne aps se perdre dans ce labyrinthe. <br> Prendrez-vous ce risque ? <button id=\"ok\">Oui</button><button id=\"notok\">Non</button> ";
        document.getElementById("ok").onclick = function() {
            if (character.getName() == "satyre") {
                inlaby();
            } else {
                deadlaby();
            }
        }
        document.getElementById("notok").onclick = function() {
            roadCraya();
        }
    }

    inlaby = function() {
        bg.style.backgroundImage = "url(assets/images/maze2.jpg)";
        text.innerHTML = "Vous vous engouffrez donc dans le labyrinthe, et vous n'allez pas etre deçu... En effet, grace a votre odorat de satyre, vous reussissez a sentir venir les differentes creatures et a en echapper, tout en gardant comme objectif la douce odeur de l'air pur de la sortie du labyrinthe. Vous parvenez donc sans encombre jusqu'a un escalier menant a la lumiere du jour, probablement Craya.<br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            craya();
        }
    }

    deadlaby = function() {
        content.innerHTML = "<img src=\"assets/images/minau.png\" class=\"perso\">";
        bg.style.backgroundImage = "url(assets/images/maze2.jpg)";
        text.innerHTML = "Vous vous engouffrez donc dans le labyrinthe, quelque peu inconscient de la dangerosite de ce mysterieux lieu ainsi que de la difficulte a en sortir... <br> Et vous allez malheureusement en payer le prix ! Sans rien pour vous guider, vous allez errer dans les couloirs sans fin du labyrinthe pendant des emaines entieres jusqu'a n'en plus pouvoir marcher. Et alors que vous vous endormez dans un recoin, le Minautore fait son apparition et vous decoupe sans difficulte...";
    }

    roadCraya = function() {
        text.innerHTML = "Vous prenez donc le bateau pour aller jusqu'a Craya avec la ferme intention de mettre fin a ces tensions dangereuses pour les deux iles. <br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            craya();
        }
    }

    craya = function() {
        bg.style.backgroundImage = "url(assets/images/piltover.jpg)";
        text.innerHTML = 'Vous arrivez donc a Craya, et en vous dirigeant vers le palais, au detour d\'une ruelle, vous entendez une porte claquer et un homme parler : "A partir de maintenant essayez de le tenir en place, il ne reste plus beaucoup de temps. Il sera sacrifie ce soir alors ne laissez personne s\'approcher d\'ici" Puis il part, regardant derriere lui que personne ne le suive. <br> Comptez vous le suivre, aller voir ce qui se trame dans cette maison, ou continuer votre route et vous depecher d\'aller au palais ?';
        content.innerHTML = "<img src=\"assets/images/dude1.png\" id=\"dude\" class=\"perso choix\"><img src=\"assets/images/panth.png\" id=\"panth\" class=\"choix\"><img src=\"assets/images/foot.png\" id=\"garde\" class=\"choix\">";
        document.getElementById("dude").onclick = function() {
            gotopanth();
        }
        document.getElementById("panth").onclick = function() {
            panth();
        }
        document.getElementById("garde").onclick = function() {
            content.innerHTML = "";
            garde();
        }
    }

    gotopanth = function() {
        content.innerHTML = "";
        text.innerHTML = "Vous suivez cet homme dans les ruelles de la ville pendant quelques minutes jusqu'a ce qui semble etre l'entree de service du palais, donc fortement gardee. Vous decidez donc d'entrer dans le palais afin de debattre avec le conseil de la disparition du roi.<br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            panth();
        }
    }

    panth = function() {
        bg.style.backgroundImage = "url(assets/images/palace.jpg)";
        text.innerHTML = "Vous entrez donc a l'interieur du palais, et discutez avec des membres du conseil de la disparition de votre roi et des navires de gurre envoyes a Megalonisos. C'est alors qu'entre un autre membre du conseil, mais vous reconaissez ce dernier. C'est l'homme que vous avez vu quelques minutes auparavant devant la maison gardee. Il explique tres serainement que le roi devait livrer de ses mains de vieux ouvrages de sa bibliotheque tres importants pour craya afin de faire preuve de sa bonne foi. Mais comme il ne l'avait pas fait, la guerre qui etait jusqu'a present retardee a ete declaree. Il vous somme ensuite de partir tres vite de l'ile car vous avez depasse le temps imparti aux emissaires envoyes par les ennemis. Mais vous savez pourtant qu'il a quelque chose a se reprocher, et au vu de son pendentif en forme de casque, il pourrait bien etre affilie a Ares. Que decidez vous donc de faire ? L'accuser, Entamer un combat direct avec lui, Repartir et aller voir directement la maison gardee";
        content.innerHTML = "<img src=\"assets/images/dude1.png\" id=\"dude\" class=\"perso choix\"><img src=\"assets/images/gavel.png\" id=\"gavel\" class=\"choix\"><img src=\"assets/images/foot.png\" id=\"garde\" class=\"choix\">";
        document.getElementById("dude").onclick = function() {
            content.innerHTML = "";
            fightconseil();
        }
        document.getElementById("gavel").onclick = function() {
            content.innerHTML = "";
            if (character.getName() == 'anabeth') {
                accuse();
            } else {
                badaccuse();
            }
        }
        document.getElementById("garde").onclick = function() {
            content.innerHTML = "";
            garde();
        }
    }

    garde = function() {
        text.innerHTML = "Vous allez donc vers la maison, et en vous voyant, le garde vous dit tres peu subtilement de degager d'ici en vous menaçant avec son arme. Vous degainez donc la votre...<br> <button class=\"continue\" id=\"next\">Continuer</button>";
        document.getElementById("next").onclick = function() {
            cave();
        }
    }

    cave = function() {
        bg.style.backgroundImage = "url(assets/images/drakon.jpg)";
        text.innerHTML = "Vous vous engouffrez donc a l'interieur de la maison. A l'interieur, il n'y a rien excepte un escalier qui descend visiblement a la cave, vous decidez donc de l'emprunter. Arrive en bas, vous voyez au fond d'un couloir crasseux, d'un cote une cellule, et de l'autre l'entree d'une grande salle. Vous vous y dirigez, et alors que vous approchez, quelqu'un s'agite dans la cellule, il s'agit du Roi avec un air blesse et tres fatigue. Il vient se coller a la grille et vous hurle \"Attention!!\" et alors que vous vous retournez, apparait dans la grande salle derriere vous, un drakon.  <br> Le roi vous conseille alors d'essayer de le nourrir avec la marmite presente dans un coin car c'est ainsi que le garde l'apprivoisait. Qu'allez-vous faire ? ";
        content.innerHTML = "<img src=\"assets/images/cauldron.png\" id=\"cauldron\" class=\"choix\"><img src=\"assets/images/sword.png\" id=\"sword\" class=\"choix\">";
        document.getElementById("cauldron").onclick = function() {
            content.innerHTML = "";
            feeddrake();
        }
        document.getElementById("sword").onclick = function() {
            content.innerHTML = "";
            let drakon = new perso("Drakon", 10, 8, 1, 0);
            fightdrake();
        }
    }

    accuse = function() {
        text.innerHTML = "Vous accusez alors ce conseiller, mais ne pensez-vous pas qu'il vous faut des preuves ? Ou un temoignage ? <br> Et alors qu'ils appellent la garde pour vous arreter, Athena votre mere apparait. <br> \"Cette jeunne femme a raison. Celui qui se fait passer ici pour un simple conseiller est en realite le fils d'Ares envoye par ce dernier pour semer la discorde entre les iles du pays. Arretez le!\" <br> Et alors que la garde arrete cet homme, Athena vous accompagne jusqu'a la maison gardee vue plus tot afin de liberer le roi emprisonne. ";
        free();
    }

    badaccuse = function() {
        bg.style.backgroundImage = "url(assets/images/jail.jpg)";
        text.innerHTML = "Vous accusez alors ce conseiller, mais ne pensez-vous pas qu'il vous faut des preuves ? Ou un temoignage ? <br> Ici rien n'appuie vos accusations. Elles partent donc dans le vent, et vous au cachot...";
    }

    fightconseil = function() {
        bg.style.backgroundImage = "url(assets/images/jail.jpg)";
        text.innerHTML = "Vous degainez donc votre arme afin de neutraliser celui qui semble etre a l'origine de tous ces maux, mais bien evidemment, en ces periodes de tensions, la garde etait tres reactive, et vous neutralise instantanement. En meme temps qu'esperiez-vous en attaquant gratuitement un membre du conseil ? La violence n'est pas toujours la bonne solution...";
    }

    feeddrake = function() {
        bg.style.backgroundImage = "url(assets/images/go2.png)";
        text.innerHTML = "Vous prenez donc un peu de nourriture dans le chaudron et tendez la main calmement vers ce drakon... Quelle idee ! Il vous arrache le bras complet avant de vous manger entierement. Ce n'est pas votre drakon, vous n'avez donc pas a le nourrir enfin...";
    }

    fightdrake = function() {
        if (character.hp <= 0) {
            content.innerHTML = "";
            fight.style.display = "none";
            fightlost();
        } else if (drakon.hp <= 0) {
            content.innerHTML = "";
            fight.style.display = "none";
            free();
        } else {
            fight.style.fontSize = "7vh";
            fight.style.top = "60vh";
            text.innerHTML = "Vous vous lancez donc dans un combat effrene avec le drakon";
            content.innerHTML = "<img src=\"assets/images/" + persoChoisi + ".png\" id=\"scylla\" class=\"fightCard\"> <h1>VS</h1> <img src=\"assets/images/drakon.png\" id=\"scylla\" class=\"fightCard\">";
            fight.style.display = "block";
            fight.innerHTML = "<span class=\"fi\"  id=\"hp\">Hp : " + character.getHp() + "</span> <br> <span class=\"fi\"  id=\"att\">Attaque</span> <span class=\"fi\"  id=\"bag\">Sac</span> <br> <span class=\"fi\"  id=\"run\">Fuite</span>";
            let att = document.getElementById("att");
            att.onclick = function() {
                degats = getRandom(1, character.getAtt()) - drakon.def;
                console.log(degats);
                drakon.hp = drakon.hp - degats;
                fight.innerHTML = "Vous lui avez inflige " + degats + " pts de degats <button id=\"kk\">OK</button>";
                console.log(drakon.getHp());
                document.getElementById("kk").onclick = function() {
                    degats = getRandom(1, drakon.getAtt()) - character.def;
                    console.log(degats);
                    character.hp = character.hp - degats;
                    fight.innerHTML = "Il vous inflige " + degats + " pts de degats <button id=\"kk\">OK</button>";
                    document.getElementById("kk").onclick = function() {
                        fightdrake();
                    }
                }
            }
            let sac = document.getElementById("bag");
            sac.onclick = function() {
                fight.innerHTML = "Vous n'avez rien dans votre sac<button id=\"kk\">OK</button>";
                document.getElementById("kk").onclick = function() {
                    fight.style.fontSize = "7vh";
                    fightdrake();
                }
            }
            let run = document.getElementById("run");
            run.onclick = function() {
                fight.innerHTML = "Vous ne pouvez pas fuir dans cet endroit <button id=\"kk\">OK</button>";
                document.getElementById("kk").onclick = function() {
                    fight.style.fontSize = "7vh";
                    fightdrake();

                }
            }
        }
    }
    free = function() {
        bg.style.backgroundImage = "url(assets/images/win.jpg)";
        text.innerHTML = "Vous parvenez donc a arriver a temps a la cellule du Roi et le liberez. Ainsi, il pu remettre ses documents au gouvernement de Craya et la paix prospera ! <br> (Du moins jusqu'a ce qu'Ares revienne...)";
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
<?php
    class Artikl
    {
        public $id;
        public $naziv;
        public $proizvodac;
        public $model;
        public $cijena;
        public $kolicina;

        public function __construct($i,$n,$p,$m,$c,$k)
        {
            $this->id=$i;
            $this->naziv=$n;
            $this->proizvodac=$p;
            $this->model=$m;
            $this->cijena=$c;
            $this->kolicina=$k;

        }
    }
?>
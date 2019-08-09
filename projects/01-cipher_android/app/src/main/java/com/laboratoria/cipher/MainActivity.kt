package com.laboratoria.cipher

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import com.laboratoria.cipher.cipher.Cipher

class MainActivity : AppCompatActivity() {
    private var cipher:Cipher

    init{
        cipher = Ciper()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}

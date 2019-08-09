package com.laboratoria.cipher

import com.laboratoria.cipher.cipher.Cipher
import com.google.common.truth.Truth.assertThat
import org.junit.Test

class CipherTest{
    var cipher:Cipher

    init{
        cipher = Cipher()
    }

    @Test
    fun `debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33`(){
        assertThat(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33))
            .isEqualTo("HIJKLMNOPQRSTUVWXYZABCDEFG")
    }

    @Test
    fun `debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33`(){
        assertThat(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33))
            .isEqualTo("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
}

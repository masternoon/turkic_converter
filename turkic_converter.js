const hard_vowels = "аоуұы";
const soft_vowels_letters = "еәіөүиь";
const dual_consonants = "бдгғчжнрстлқкш";

diphthongs_dict = {
    'ок' : "𐰸",
    'ук' : "𐰸",
    'өк' : "𐰜",
    'үк' : "𐰜",
    'ик' : "𐰶",
    'ек' : "𐰶",
    'ык' : "𐰶",
    'ық' : "𐰶",
    'қы' : "𐰶",
    'ки' : "𐰶",
    'нч' : "𐰨",
    'нш' : "𐰨",
    'ант' : "𐰦",
    'нт' : "𐰦",
    'нд' : "𐰦",
    'алт' : "𐰡",
    'лт' : "𐰡",
    'лд' : "𐰡",
    'арт' : "𐱈",
    'рт' : "𐱈",
    'рд' : "𐱈",
    'от' : "𐱇",
    'ут' : "𐱇",
    'ай' : "𐰗",
    'йай' : "𐰗",
}
to_turkic_dict = {
    'а' : "𐰀",
    'ә' : "𐰂",
    'і' : "𐰃",
    'ы' : "𐰃",
    'и' : "𐰄",
    'й' : "𐰄",
    'е' : "𐰅",
    'о' : "𐰆",
    'у' : "𐰆",
    'ө' : "𐰇",
    'ү' : "𐰇",
    'м' : "𐰢",
    'ң' : "𐰭",
    'п' : "𐰯",
    'з' : "𐰕",
    'нь' : "𐰪",
    'в' : "𐰊",
    'ц' : "𐰳",
    'х' : "𐰴",
    'ф' : "𐰯",
    'ұ' : "𐰆",
    'я' : "𐰄𐰀",
    'th' : "𐰕",
}
hard_consonants = {
    'б' : "𐰉",
    'д' : "𐰑",
    'г' : "𐰍",
    'ғ' : "𐰍",
    'ч' : "𐰲",
    'ж' : "𐰖",
    'н' : "𐰣",
    'р' : "𐰺",
    'с' : "𐰽",
    'т' : "𐱃",
    'л' : "𐰞",
    'қ' : "𐰴",
    'к' : "𐰴",
    'ш' : "𐰿",
}
soft_consonants = {
    'б' : "𐰋",
    'д' : "𐰓",
    'г' : "𐰏",
    'ғ' : "𐰏",
    'ч' : "𐰱",
    'ж' : "𐰘",
    'н' : "𐰤",
    'р' : "𐰼",
    'с' : "𐰾",
    'т' : "𐱅",
    'л' : "𐰠",
    'қ' : "𐰚",
    'к' : "𐰚",
    'ш' : "𐱁",
}

function get_dual(letter, prev_letter, next_letter) {
    is_soft = false;
    rune = ""
    if(prev_letter)
        if(soft_vowels_letters.includes(prev_letter))
            is_soft = true;
    if(next_letter)
        if(soft_vowels_letters.includes(next_letter))
            is_soft = true;
    if(is_soft)
        rune = soft_consonants[letter]
    else
        rune = hard_consonants[letter]

    return rune;
}

// problem with double letters

function convert_word_to_script(word_to_convert)
{
    converted_word = "";
    for(var i = 0; i < word_to_convert.length; i++)
    {
        let char_to_convert = word_to_convert[i].toLowerCase();
        final_char = "";
            if(dual_consonants.includes(char_to_convert))
                final_char = get_dual(char_to_convert, word_to_convert[i-1], word_to_convert[i+1]);
            else if(char_to_convert in to_turkic_dict)
                final_char = to_turkic_dict[char_to_convert];
            else
                final_char = char_to_convert;
        converted_word += final_char;
    }
    return converted_word;
}
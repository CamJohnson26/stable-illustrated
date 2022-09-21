from os.path import join

from spacy.lang.en import English

def get_prompt(caption, job, index):
    return f'{job} - {index} : captioned {caption}. Oil painting of the bible (realistic, detailed, full color, high quality)'

with open(join('books', 'Genesis', '1.txt')) as f:
    text = f.read()

nlp = English()
nlp.add_pipe('sentencizer')
sentences = [i.text.strip() for i in nlp(text).sents]
sentences = [s.replace(':', '-') for s in sentences] # ':' is a reserved keyword
sentences = [s.replace('\n', ' ') for s in sentences]

with open(join('books', 'Genesis', '1.output.txt'), 'w') as f:
    counter = 0
    for s in sentences:
        prompt = get_prompt(s, 'books - Genesis - 1', counter)
        f.write(prompt)
        f.write('\n')
        counter += 1
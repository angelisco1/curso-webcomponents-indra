import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';

class FormCv extends PolymerElement {
  static get is() {
    return 'form-cv';
  }

  static get template() {
    return html`
      <h2>Rellena los datos</h2>
      <form>
        <div>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value$="[[nombre]]" on-input="changeProp" />
        </div>
        <div>
          <label for="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" value$="[[apellidos]]" on-input="changeProp" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value$="[[email]]" on-input="changeProp" />
          </div>
        <div>
          <label for="skill">Add skill:</label>
          <input type="text" id="skill" name="skill" value$="[[skill]]" on-change="addSkill" />
          <br />
          <template is="dom-repeat" items="{{skills}}">
            <input type="text" id="skill{{index}}" name="{{index}}" value="{{item}}" on-change="editSkill" />
          </template>
        </div>
      </form>
    `;
  }

  static get properties() {
    return {
      nombre: {
        notify: true
      },
      apellidos: {
        notify: true
      },
      email: {
        notify: true
      },
      skills: {
        notify: true
      }
    }
  }

  addSkill(event) {
    let inputSkill = event.target;
    this.skills = [...this.skills, inputSkill.value];
    inputSkill.value = '';
  }

  editSkill(event) {
    const skillUpdated = event.target.value;
    const posSkillUpdated = Number(event.target.name);
    if (skillUpdated) {
      this.skills = this.skills.map((skill, pos) => {
        if (pos == posSkillUpdated) {
          return skillUpdated;
        }
        return skill;
      })
      // this.splice('skills', posSkillUpdated, 1, skillUpdated)
    } else {
      const skillsUpdated = this.skills.filter((skill, pos) => {
        return pos != posSkillUpdated;
      })
      console.log(skillsUpdated)
      this.skills = skillsUpdated;
      // this.splice('skills', posSkillUpdated, 1)
    }
  }

  changeProp(event) {
    this[event.target.name] = event.target.value;
  }
}

window.customElements.define(FormCv.is, FormCv);